import { CustomError } from "../utils/errors.js";

const globalErrorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        console.error(`Error occured: ${err.message}`);
        res.status(err.statusCode).json({ error: err.message, details: err.details });
    } else {
        console.error('Server Error!', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default globalErrorHandler;