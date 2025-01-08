import express from 'express';
const router = express.Router();
import checkPermission from '../middleware/checkPermission.js';
import { loginDetails, regDetails, validate, genTokenDetails, resetPwdDetails } from '../middleware/validate.js';
import { AuthController } from '../controllers/authController.js';
import { authorizeUser } from '../middleware/authorize.js';

const authController = new AuthController();

router.post('/register', authorizeUser, checkPermission('manage_users'), validate(regDetails), authController.register)
router.post('/login', validate(loginDetails), authController.login)
router.post('/logout', authController.logout)
router.post('/generate-reset-token', validate(genTokenDetails), authController.generateResetToken)
router.post('/reset-password/:token', validate(resetPwdDetails), authController.resetPassword)

export default router;