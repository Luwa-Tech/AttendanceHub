import { body } from 'express-validator';
import { InputError } from '../utils/errors';

export const validateNewUser = [
  body('firstname').isString().escape().withMessage('firstname is required'),
  body('lastname').isString().escape().withMessage('lastname is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

// export const validateUserLogin = [
//   body('email').isEmail().withMessage('Invalid email address'),
//   body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
// ];

export const validate = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        
        console.log(result.array())
        const errorDetails = result.array().map(err => ({ field: err.param, message: err.msg }));

        throw new InputError('Validation Error', 'invalid_input', errorDetails);
    
        return;
      }
    }

    next();
  };
}; 
