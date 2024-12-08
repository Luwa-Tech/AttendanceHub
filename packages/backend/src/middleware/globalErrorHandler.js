import { CustomError } from "../utils/errors.js";

const globalErrorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        console.error(`Error occured: ${e.code}`);
        res.status(e.statusCode).json({ error: e.message, details: e.details })
    } else {
        console.error('Server Error!', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default globalErrorHandler;