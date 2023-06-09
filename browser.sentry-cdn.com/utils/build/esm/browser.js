import {
    getGlobalObject
} from './global.js';
import {
    isString
} from './is.js';

/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlTreeAsString(elem, keyAttrs) {


    // try/catch both:
    // - accessing event.target (see getsentry/raven-js#838, #768)
    // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
    // - can throw an exception in some circumstances.
    try {
        let currentElem = elem;
        var MAX_TRAVERSE_HEIGHT = 5;
        var MAX_OUTPUT_LEN = 80;
        var out = [];
        let height = 0;
        let len = 0;
        var separator = ' > ';
        var sepLength = separator.length;
        let nextStr;

        while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
            nextStr = _htmlElementAsString(currentElem, keyAttrs);
            // bail out if
            // - nextStr is the 'html' element
            // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
            //   (ignore this limit if we are on the first iteration)
            if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)) {
                break;
            }

            out.push(nextStr);

            len += nextStr.length;
            currentElem = currentElem.parentNode;
        }

        return out.reverse().join(separator);
    } catch (_oO) {
        return '<unknown>';
    }
}

/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function _htmlElementAsString(el, keyAttrs) {
    var elem = el

    ;

    var out = [];
    let className;
    let classes;
    let key;
    let attr;
    let i;

    if (!elem || !elem.tagName) {
        return '';
    }

    out.push(elem.tagName.toLowerCase());

    // Pairs of attribute keys defined in `serializeAttribute` and their values on element.
    var keyAttrPairs =
        keyAttrs && keyAttrs.length ?
        keyAttrs.filter(keyAttr => elem.getAttribute(keyAttr)).map(keyAttr => [keyAttr, elem.getAttribute(keyAttr)]) :
        null;

    if (keyAttrPairs && keyAttrPairs.length) {
        keyAttrPairs.forEach(keyAttrPair => {
            out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
        });
    } else {
        if (elem.id) {
            out.push(`#${elem.id}`);
        }

        className = elem.className;
        if (className && isString(className)) {
            classes = className.split(/\s+/);
            for (i = 0; i < classes.length; i++) {
                out.push(`.${classes[i]}`);
            }
        }
    }
    var allowedAttrs = ['type', 'name', 'title', 'alt'];
    for (i = 0; i < allowedAttrs.length; i++) {
        key = allowedAttrs[i];
        attr = elem.getAttribute(key);
        if (attr) {
            out.push(`[${key}="${attr}"]`);
        }
    }
    return out.join('');
}

/**
 * A safe form of location.href
 */
function getLocationHref() {
    var global = getGlobalObject();
    try {
        return global.document.location.href;
    } catch (oO) {
        return '';
    }
}

export {
    getLocationHref,
    htmlTreeAsString
};
//# sourceMappingURL=browser.js.map