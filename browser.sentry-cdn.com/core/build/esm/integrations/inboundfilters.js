import {
    logger,
    getEventDescription,
    isMatchingPattern
} from '@sentry/utils';

// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];

/** Options for the InboundFilters integration */

/** Inbound filters configurable by the user */
class InboundFilters {
    /**
     * @inheritDoc
     */
    static __initStatic() {
        this.id = 'InboundFilters';
    }

    /**
     * @inheritDoc
     */
    __init() {
        this.name = InboundFilters.id;
    }

    constructor(_options = {}) {;
        this._options = _options;
        InboundFilters.prototype.__init.call(this);
    }

    /**
     * @inheritDoc
     */
    setupOnce(addGlobalEventProcessor, getCurrentHub) {
        var eventProcess = (event) => {
            var hub = getCurrentHub();
            if (hub) {
                var self = hub.getIntegration(InboundFilters);
                if (self) {
                    var client = hub.getClient();
                    var clientOptions = client ? client.getOptions() : {};
                    var options = _mergeOptions(self._options, clientOptions);
                    return _shouldDropEvent(event, options) ? null : event;
                }
            }
            return event;
        };

        eventProcess.id = this.name;
        addGlobalEventProcessor(eventProcess);
    }
}
InboundFilters.__initStatic();

/** JSDoc */
function _mergeOptions(
    internalOptions = {},
    clientOptions = {},
) {
    return {
        allowUrls: [...(internalOptions.allowUrls || []), ...(clientOptions.allowUrls || [])],
        denyUrls: [...(internalOptions.denyUrls || []), ...(clientOptions.denyUrls || [])],
        ignoreErrors: [
            ...(internalOptions.ignoreErrors || []),
            ...(clientOptions.ignoreErrors || []),
            ...DEFAULT_IGNORE_ERRORS,
        ],
        ignoreInternal: internalOptions.ignoreInternal !== undefined ? internalOptions.ignoreInternal : true,
    };
}

/** JSDoc */
function _shouldDropEvent(event, options) {
    if (options.ignoreInternal && _isSentryError(event)) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${getEventDescription(event)}`);
        return true;
    }
    if (_isIgnoredError(event, options.ignoreErrors)) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.warn(
            `Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${getEventDescription(event)}`,
        );
        return true;
    }
    if (_isDeniedUrl(event, options.denyUrls)) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.warn(
            `Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${getEventDescription(
          event,
        )}.\nUrl: ${_getEventFilterUrl(event)}`,
        );
        return true;
    }
    if (!_isAllowedUrl(event, options.allowUrls)) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.warn(
            `Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${getEventDescription(
          event,
        )}.\nUrl: ${_getEventFilterUrl(event)}`,
        );
        return true;
    }
    return false;
}

function _isIgnoredError(event, ignoreErrors) {
    if (!ignoreErrors || !ignoreErrors.length) {
        return false;
    }

    return _getPossibleEventMessages(event).some(message =>
        ignoreErrors.some(pattern => isMatchingPattern(message, pattern)),
    );
}

function _isDeniedUrl(event, denyUrls) {
    // TODO: Use Glob instead?
    if (!denyUrls || !denyUrls.length) {
        return false;
    }
    var url = _getEventFilterUrl(event);
    return !url ? false : denyUrls.some(pattern => isMatchingPattern(url, pattern));
}

function _isAllowedUrl(event, allowUrls) {
    // TODO: Use Glob instead?
    if (!allowUrls || !allowUrls.length) {
        return true;
    }
    var url = _getEventFilterUrl(event);
    return !url ? true : allowUrls.some(pattern => isMatchingPattern(url, pattern));
}

function _getPossibleEventMessages(event) {
    if (event.message) {
        return [event.message];
    }
    if (event.exception) {
        try {
            const {
                type = '', value = ''
            } = (event.exception.values && event.exception.values[0]) || {};
            return [`${value}`, `${type}: ${value}`];
        } catch (oO) {
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error(`Cannot extract message for event ${getEventDescription(event)}`);
            return [];
        }
    }
    return [];
}

function _isSentryError(event) {
    try {
        // @ts-ignore can't be a sentry error if undefined
        return event.exception.values[0].type === 'SentryError';
    } catch (e) {
        // ignore
    }
    return false;
}

function _getLastValidUrl(frames = []) {
    for (let i = frames.length - 1; i >= 0; i--) {
        var frame = frames[i];

        if (frame && frame.filename !== '<anonymous>' && frame.filename !== '[native code]') {
            return frame.filename || null;
        }
    }

    return null;
}

function _getEventFilterUrl(event) {
    try {
        let frames;
        try {
            // @ts-ignore we only care about frames if the whole thing here is defined
            frames = event.exception.values[0].stacktrace.frames;
        } catch (e) {
            // ignore
        }
        return frames ? _getLastValidUrl(frames) : null;
    } catch (oO) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error(`Cannot extract url for event ${getEventDescription(event)}`);
        return null;
    }
}

export {
    InboundFilters,
    _mergeOptions,
    _shouldDropEvent
};
//# sourceMappingURL=inboundfilters.js.map