export class CustomError extends Error { };

export class InputError extends CustomError { 
    constructor(message = 'Input Error', code = 'invalid_input', details = []) {
        super(message);
        this.code = code;
        this.details = details;
        this.statusCode = 400;
    }
};

export class NotFoundError extends CustomError {
    constructor(message = 'Not found Error', code = 'not_found', details = '') {
        super(message);
        this.code = code;
        this.statusCode = 404;
        this.details = details;
    }
};

export class TokenExpirationError extends CustomError {
    constructor(message = 'Token Expired', code = 'token_expired', details = '') {
        super(message);
        this.statusCode = 401;
        this.code = code;
        this.details = details;
    }
}

export class AccessDeniedError extends CustomError {
    constructor(message = 'Access Denied', code = 'access_denied', details = '') {
        super(message);
        this.statusCode = 403;
        this.code = code;
        this.details = details;
    }
}