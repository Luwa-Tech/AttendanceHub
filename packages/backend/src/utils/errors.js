export class CustomError extends Error { };

// add a status argument to every error type and use in wrapper

export class InputError extends CustomError { 
    constructor(message = 'Input Error', code = 'invalid_input', details = []) {
        super(message);
        this.code = code;
        this.details = details;
    }
};

export class NotFoundError extends CustomError {
    constructor(message = 'Not found Error') {
        super(message);
        this.statusCode = 404;
    }
};