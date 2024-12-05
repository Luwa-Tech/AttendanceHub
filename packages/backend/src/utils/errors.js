export class CustomError extends Error { };

export class InputError extends CustomError { 
    constructor(message = 'Input Error', details = []) {
        super(message);
        this.details = details;
        this.statusCode = 400;
    }
};

export class AuthorizationError extends CustomError {
    constructor(message = 'Unauthorized Error', details) {
        super(message);
        this.details = details;
        this.statusCode = 403;
    }
}

export class NotFoundError extends CustomError {
    constructor(message = 'Not found Error', details = '') {
        super(message);
        this.statusCode = 404;
        this.details = details;
    }
};

export class TokenExpirationError extends CustomError {
    constructor(message = 'Token Expired', details = '') {
        super(message);
        this.statusCode = 401;
        this.details = details;
    }
}

export class AccessDeniedError extends CustomError {
    constructor(message = 'Access Denied', details = '') {
        super(message);
        this.statusCode = 403;
        this.details = details;
    }
}

export class ExistingRecordError extends CustomError {
    constructor(message = 'Attendance Record Error', details = '') {
        super(message);
        this.statusCode = 409;
        this.details = details;
    }
}