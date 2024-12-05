import jwt from 'jsonwebtoken';
import { AuthorizationError } from '../utils/errors.js';

export const authorizeUser = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        throw new AuthorizationError('User unauthorized',  '')
    }

    try {
        const accessKey = process.env.ACCESS_KEY;
        const data = jwt.verify(token, accessKey);
        req.user = data;
        next();
    } catch (err) {
        throw new AuthorizationError('User unauthorized', err)
    }
};
