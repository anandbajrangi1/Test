import {
    SentryError
} from './error.js';

/** Regular expression used to parse a Dsn. */
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

function isValidProtocol(protocol) {
    return protocol === 'http' || protocol === 'https';
}

/**
 * Renders the string representation of this Dsn.
 *
 * By default, this will render the public representation without the password
 * component. To get the deprecated private representation, set `withPassword`
 * to true.
 *
 * @param withPassword When set to true, the password will be included.
 */
function dsnToString(dsn, withPassword = false) {
    const {
        host,
        path,
        pass,
        port,
        projectId,
        protocol,
        publicKey
    } = dsn;
    return (
        `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ''}` +
        `@${host}${port ? `:${port}` : ''}/${path ? `${path}/` : path}${projectId}`
    );
}

/**
 * Parses a Dsn from a given string.
 *
 * @param str A Dsn as string
 * @returns Dsn as DsnComponents
 */
function dsnFromString(str) {
    var match = DSN_REGEX.exec(str);

    if (!match) {
        throw new SentryError(`Invalid Sentry Dsn: ${str}`);
    }

    const [protocol, publicKey, pass = '', host, port = '', lastPath] = match.slice(1);
    let path = '';
    let projectId = lastPath;

    var split = projectId.split('/');
    if (split.length > 1) {
        path = split.slice(0, -1).join('/');
        projectId = split.pop();
    }

    if (projectId) {
        var projectMatch = projectId.match(/^\d+/);
        if (projectMatch) {
            projectId = projectMatch[0];
        }
    }

    return dsnFromComponents({
        host,
        pass,
        path,
        projectId,
        port,
        protocol: protocol,
        publicKey
    });
}

function dsnFromComponents(components) {
    return {
        protocol: components.protocol,
        publicKey: components.publicKey || '',
        pass: components.pass || '',
        host: components.host,
        port: components.port || '',
        path: components.path || '',
        projectId: components.projectId,
    };
}

function validateDsn(dsn) {
    if (!(typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
        return;
    }

    const {
        port,
        projectId,
        protocol
    } = dsn;

    var requiredComponents = ['protocol', 'publicKey', 'host', 'projectId'];
    requiredComponents.forEach(component => {
        if (!dsn[component]) {
            throw new SentryError(`Invalid Sentry Dsn: ${component} missing`);
        }
    });

    if (!projectId.match(/^\d+$/)) {
        throw new SentryError(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
    }

    if (!isValidProtocol(protocol)) {
        throw new SentryError(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
    }

    if (port && isNaN(parseInt(port, 10))) {
        throw new SentryError(`Invalid Sentry Dsn: Invalid port ${port}`);
    }

    return true;
}

/** The Sentry Dsn, identifying a Sentry instance and project. */
function makeDsn(from) {
    var components = typeof from === 'string' ? dsnFromString(from) : dsnFromComponents(from);
    validateDsn(components);
    return components;
}

/**
 * Changes a Dsn to point to the `relay` server running in the Lambda Extension.
 *
 * This is only used by the serverless integration for AWS Lambda.
 *
 * @param originalDsn The original Dsn of the customer.
 * @returns Dsn pointing to Lambda extension.
 */
function extensionRelayDSN(originalDsn) {
    if (originalDsn === undefined) {
        return undefined;
    }

    var dsn = dsnFromString(originalDsn);
    dsn.host = 'localhost';
    dsn.port = '3000';
    dsn.protocol = 'http';

    return dsnToString(dsn);
}

export {
    dsnToString,
    extensionRelayDSN,
    makeDsn
};
//# sourceMappingURL=dsn.js.map