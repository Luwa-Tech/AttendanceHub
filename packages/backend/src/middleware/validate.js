import { body } from 'express-validator';
import { InputError } from '../utils/errors.js';

export const regDetails = [
  body('firstname').isString().withMessage('firstname is required'),
  body('lastname').isString().withMessage('lastname is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('jobTitle').isString().withMessage('Job role is required'),
  body('role').isString().withMessage('Employee role is required')
];

export const loginDetails = [
  body('email').isString().withMessage('ID is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

export const genTokenDetails = [
  body('email').isString().withMessage('ID is required')
];

export const resetPwdDetails = [
  body('newPassword').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('confirmPassword').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

export const validate = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        console.log(result.array())
        const errorDetails = result.array().map(err => ({ field: err.param, message: err.msg }));

        throw new InputError('Validation Error', errorDetails);
      }
    }

    next();
  };
}; 
