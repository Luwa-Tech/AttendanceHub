export class CustomError extends Error { };

export class InputError extends CustomError { 
    constructor(message = 'Input Error', code, details = []) {
        super(message);
        this.code = code;
        this.details = details;
    }
};

export class NotFoundError extends CustomError {
    constructor(message = 'Not found Error', code) {
        super(message);
        this.code = code;
    }
};