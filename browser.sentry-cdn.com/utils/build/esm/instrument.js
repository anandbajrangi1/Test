import {
    getGlobalObject
} from './global.js';
import {
    isInstanceOf,
    isString
} from './is.js';
import {
    logger,
    CONSOLE_LEVELS
} from './logger.js';
import {
    fill
} from './object.js';
import {
    getFunctionName
} from './stacktrace.js';
import {
    supportsNativeFetch,
    supportsHistory
} from './supports.js';

var global = getGlobalObject();

/**
 * Instrument native APIs to call handlers that can be used to create breadcrumbs, APM spans etc.
 *  - Console API
 *  - Fetch API
 *  - XHR API
 *  - History API
 *  - DOM API (click/typing)
 *  - Error API
 *  - UnhandledRejection API
 */

var handlers = {};
var instrumented = {};

/** Instruments given API */
function instrument(type) {
    if (instrumented[type]) {
        return;
    }

    instrumented[type] = true;

    switch (type) {
        case 'console':
            instrumentConsole();
            break;
        case 'dom':
            instrumentDOM();
            break;
        case 'xhr':
            instrumentXHR();
            break;
        case 'fetch':
            instrumentFetch();
            break;
        case 'history':
            instrumentHistory();
            break;
        case 'error':
            instrumentError();
            break;
        case 'unhandledrejection':
            instrumentUnhandledRejection();
            break;
        default:
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.warn('unknown instrumentation type:', type);
            return;
    }
}

/**
 * Add handler that will be called when given type of instrumentation triggers.
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addInstrumentationHandler(type, callback) {
    handlers[type] = handlers[type] || [];
    (handlers[type]).push(callback);
    instrument(type);
}

/** JSDoc */
function triggerHandlers(type, data) {
    if (!type || !handlers[type]) {
        return;
    }

    for (var handler of handlers[type] || []) {
        try {
            handler(data);
        } catch (e) {
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
            logger.error(
                `Error while triggering instrumentation handler.\nType: ${type}\nName: ${getFunctionName(handler)}\nError:`,
                e,
            );
        }
    }
}

/** JSDoc */
function instrumentConsole() {
    if (!('console' in global)) {
        return;
    }

    CONSOLE_LEVELS.forEach(function(level) {
        if (!(level in global.console)) {
            return;
        }

        fill(global.console, level, function(originalConsoleMethod) {
            return function(...args) {
                triggerHandlers('console', {
                    args,
                    level
                });

                // this fails for some browsers. :(
                if (originalConsoleMethod) {
                    originalConsoleMethod.apply(global.console, args);
                }
            };
        });
    });
}

/** JSDoc */
function instrumentFetch() {
    if (!supportsNativeFetch()) {
        return;
    }

    fill(global, 'fetch', function(originalFetch) {
        return function(...args) {
            var handlerData = {
                args,
                fetchData: {
                    method: getFetchMethod(args),
                    url: getFetchUrl(args),
                },
                startTimestamp: Date.now(),
            };

            triggerHandlers('fetch', {
                ...handlerData,
            });

            return originalFetch.apply(global, args).then(
                (response) => {
                    triggerHandlers('fetch', {
                        ...handlerData,
                        endTimestamp: Date.now(),
                        response,
                    });
                    return response;
                },
                (error) => {
                    triggerHandlers('fetch', {
                        ...handlerData,
                        endTimestamp: Date.now(),
                        error,
                    });
                    // NOTE: If you are a Sentry user, and you are seeing this stack frame,
                    //       it means the sentry.javascript SDK caught an error invoking your application code.
                    //       This is expected behavior and NOT indicative of a bug with sentry.javascript.
                    throw error;
                },
            );
        };
    });
}

/** Extract `method` from fetch call arguments */
function getFetchMethod(fetchArgs = []) {
    if ('Request' in global && isInstanceOf(fetchArgs[0], Request) && fetchArgs[0].method) {
        return String(fetchArgs[0].method).toUpperCase();
    }
    if (fetchArgs[1] && fetchArgs[1].method) {
        return String(fetchArgs[1].method).toUpperCase();
    }
    return 'GET';
}

/** Extract `url` from fetch call arguments */
function getFetchUrl(fetchArgs = []) {
    if (typeof fetchArgs[0] === 'string') {
        return fetchArgs[0];
    }
    if ('Request' in global && isInstanceOf(fetchArgs[0], Request)) {
        return fetchArgs[0].url;
    }
    return String(fetchArgs[0]);
}

/** JSDoc */
function instrumentXHR() {
    if (!('XMLHttpRequest' in global)) {
        return;
    }

    var xhrproto = XMLHttpRequest.prototype;

    fill(xhrproto, 'open', function(originalOpen) {
        return function(...args) {
            var xhr = this;
            var url = args[1];
            var xhrInfo = (xhr.__sentry_xhr__ = {
                method: isString(args[0]) ? args[0].toUpperCase() : args[0],
                url: args[1],
            });

            // if Sentry key appears in URL, don't capture it as a request
            if (isString(url) && xhrInfo.method === 'POST' && url.match(/sentry_key/)) {
                xhr.__sentry_own_request__ = true;
            }

            var onreadystatechangeHandler = function() {
                if (xhr.readyState === 4) {
                    try {
                        // touching statusCode in some platforms throws
                        // an exception
                        xhrInfo.status_code = xhr.status;
                    } catch (e) {
                        /* do nothing */
                    }

                    triggerHandlers('xhr', {
                        args,
                        endTimestamp: Date.now(),
                        startTimestamp: Date.now(),
                        xhr,
                    });
                }
            };

            if ('onreadystatechange' in xhr && typeof xhr.onreadystatechange === 'function') {
                fill(xhr, 'onreadystatechange', function(original) {
                    return function(...readyStateArgs) {
                        onreadystatechangeHandler();
                        return original.apply(xhr, readyStateArgs);
                    };
                });
            } else {
                xhr.addEventListener('readystatechange', onreadystatechangeHandler);
            }

            return originalOpen.apply(xhr, args);
        };
    });

    fill(xhrproto, 'send', function(originalSend) {
        return function(...args) {
            if (this.__sentry_xhr__ && args[0] !== undefined) {
                this.__sentry_xhr__.body = args[0];
            }

            triggerHandlers('xhr', {
                args,
                startTimestamp: Date.now(),
                xhr: this,
            });

            return originalSend.apply(this, args);
        };
    });
}

let lastHref;

/** JSDoc */
function instrumentHistory() {
    if (!supportsHistory()) {
        return;
    }

    var oldOnPopState = global.onpopstate;
    global.onpopstate = function(...args) {
        var to = global.location.href;
        // keep track of the current URL state, as we always receive only the updated state
        var from = lastHref;
        lastHref = to;
        triggerHandlers('history', {
            from,
            to,
        });
        if (oldOnPopState) {
            // Apparently this can throw in Firefox when incorrectly implemented plugin is installed.
            // https://github.com/getsentry/sentry-javascript/issues/3344
            // https://github.com/bugsnag/bugsnag-js/issues/469
            try {
                return oldOnPopState.apply(this, args);
            } catch (_oO) {
                // no-empty
            }
        }
    };

    /** @hidden */
    function historyReplacementFunction(originalHistoryFunction) {
        return function(...args) {
            var url = args.length > 2 ? args[2] : undefined;
            if (url) {
                // coerce to string (this is what pushState does)
                var from = lastHref;
                var to = String(url);
                // keep track of the current URL state, as we always receive only the updated state
                lastHref = to;
                triggerHandlers('history', {
                    from,
                    to,
                });
            }
            return originalHistoryFunction.apply(this, args);
        };
    }

    fill(global.history, 'pushState', historyReplacementFunction);
    fill(global.history, 'replaceState', historyReplacementFunction);
}

var debounceDuration = 1000;
let debounceTimerID;
let lastCapturedEvent;

/**
 * Decide whether the current event should finish the debounce of previously captured one.
 * @param previous previously captured event
 * @param current event to be captured
 */
function shouldShortcircuitPreviousDebounce(previous, current) {
    // If there was no previous event, it should always be swapped for the new one.
    if (!previous) {
        return true;
    }

    // If both events have different type, then user definitely performed two separate actions. e.g. click + keypress.
    if (previous.type !== current.type) {
        return true;
    }

    try {
        // If both events have the same type, it's still possible that actions were performed on different targets.
        // e.g. 2 clicks on different buttons.
        if (previous.target !== current.target) {
            return true;
        }
    } catch (e) {
        // just accessing `target` property can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/sentry-javascript/issues/838
    }

    // If both events have the same type _and_ same `target` (an element which triggered an event, _not necessarily_
    // to which an event listener was attached), we treat them as the same action, as we want to capture
    // only one breadcrumb. e.g. multiple clicks on the same button, or typing inside a user input box.
    return false;
}

/**
 * Decide whether an event should be captured.
 * @param event event to be captured
 */
function shouldSkipDOMEvent(event) {
    // We are only interested in filtering `keypress` events for now.
    if (event.type !== 'keypress') {
        return false;
    }

    try {
        var target = event.target;

        if (!target || !target.tagName) {
            return true;
        }

        // Only consider keypress events on actual input elements. This will disregard keypresses targeting body
        // e.g.tabbing through elements, hotkeys, etc.
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
            return false;
        }
    } catch (e) {
        // just accessing `target` property can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/sentry-javascript/issues/838
    }

    return true;
}

/**
 * Wraps addEventListener to capture UI breadcrumbs
 * @param handler function that will be triggered
 * @param globalListener indicates whether event was captured by the global event listener
 * @returns wrapped breadcrumb events handler
 * @hidden
 */
function makeDOMEventHandler(handler, globalListener = false) {
    return (event) => {
        // It's possible this handler might trigger multiple times for the same
        // event (e.g. event propagation through node ancestors).
        // Ignore if we've already captured that event.
        if (!event || lastCapturedEvent === event) {
            return;
        }

        // We always want to skip _some_ events.
        if (shouldSkipDOMEvent(event)) {
            return;
        }

        var name = event.type === 'keypress' ? 'input' : event.type;

        // If there is no debounce timer, it means that we can safely capture the new event and store it for future comparisons.
        if (debounceTimerID === undefined) {
            handler({
                event: event,
                name,
                global: globalListener,
            });
            lastCapturedEvent = event;
        }
        // If there is a debounce awaiting, see if the new event is different enough to treat it as a unique one.
        // If that's the case, emit the previous event and store locally the newly-captured DOM event.
        else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
            handler({
                event: event,
                name,
                global: globalListener,
            });
            lastCapturedEvent = event;
        }

        // Start a new debounce timer that will prevent us from capturing multiple events that should be grouped together.
        clearTimeout(debounceTimerID);
        debounceTimerID = global.setTimeout(() => {
            debounceTimerID = undefined;
        }, debounceDuration);
    };
}

/** JSDoc */
function instrumentDOM() {
    if (!('document' in global)) {
        return;
    }

    // Make it so that any click or keypress that is unhandled / bubbled up all the way to the document triggers our dom
    // handlers. (Normally we have only one, which captures a breadcrumb for each click or keypress.) Do this before
    // we instrument `addEventListener` so that we don't end up attaching this handler twice.
    var triggerDOMHandler = triggerHandlers.bind(null, 'dom');
    var globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
    global.document.addEventListener('click', globalDOMEventHandler, false);
    global.document.addEventListener('keypress', globalDOMEventHandler, false);

    // After hooking into click and keypress events bubbled up to `document`, we also hook into user-handled
    // clicks & keypresses, by adding an event listener of our own to any element to which they add a listener. That
    // way, whenever one of their handlers is triggered, ours will be, too. (This is needed because their handler
    // could potentially prevent the event from bubbling up to our global listeners. This way, our handler are still
    // guaranteed to fire at least once.)
    ['EventTarget', 'Node'].forEach((target) => {
        var proto = (global)[target] && (global)[target].prototype;
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
            return;
        }

        fill(proto, 'addEventListener', function(originalAddEventListener) {
            return function(

                type,
                listener,
                options,
            ) {
                if (type === 'click' || type == 'keypress') {
                    try {
                        var el = this;
                        var handlers = (el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {});
                        var handlerForType = (handlers[type] = handlers[type] || {
                            refCount: 0
                        });

                        if (!handlerForType.handler) {
                            var handler = makeDOMEventHandler(triggerDOMHandler);
                            handlerForType.handler = handler;
                            originalAddEventListener.call(this, type, handler, options);
                        }

                        handlerForType.refCount += 1;
                    } catch (e) {
                        // Accessing dom properties is always fragile.
                        // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                    }
                }

                return originalAddEventListener.call(this, type, listener, options);
            };
        });

        fill(
            proto,
            'removeEventListener',
            function(originalRemoveEventListener) {
                return function(

                    type,
                    listener,
                    options,
                ) {
                    if (type === 'click' || type == 'keypress') {
                        try {
                            var el = this;
                            var handlers = el.__sentry_instrumentation_handlers__ || {};
                            var handlerForType = handlers[type];

                            if (handlerForType) {
                                handlerForType.refCount -= 1;
                                // If there are no longer any custom handlers of the current type on this element, we can remove ours, too.
                                if (handlerForType.refCount <= 0) {
                                    originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                                    handlerForType.handler = undefined;
                                    delete handlers[type];
                                }

                                // If there are no longer any custom handlers of any type on this element, cleanup everything.
                                if (Object.keys(handlers).length === 0) {
                                    delete el.__sentry_instrumentation_handlers__;
                                }
                            }
                        } catch (e) {
                            // Accessing dom properties is always fragile.
                            // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                        }
                    }

                    return originalRemoveEventListener.call(this, type, listener, options);
                };
            },
        );
    });
}

let _oldOnErrorHandler = null;
/** JSDoc */
function instrumentError() {
    _oldOnErrorHandler = global.onerror;

    global.onerror = function(msg, url, line, column, error) {
        triggerHandlers('error', {
            column,
            error,
            line,
            msg,
            url,
        });

        if (_oldOnErrorHandler) {
            return _oldOnErrorHandler.apply(this, arguments);
        }

        return false;
    };
}

let _oldOnUnhandledRejectionHandler = null;
/** JSDoc */
function instrumentUnhandledRejection() {
    _oldOnUnhandledRejectionHandler = global.onunhandledrejection;

    global.onunhandledrejection = function(e) {
        triggerHandlers('unhandledrejection', e);

        if (_oldOnUnhandledRejectionHandler) {
            return _oldOnUnhandledRejectionHandler.apply(this, arguments);
        }

        return true;
    };
}

export {
    addInstrumentationHandler
};
//# sourceMappingURL=instrument.js.map