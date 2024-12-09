import express from 'express';
const router = express.Router();
import checkPermission from '../middleware/checkPermission.js';
import { loginDetails, regDetails, validate, genTokenDetails, resetPwdDetails } from '../middleware/validate.js';
import { AuthController } from '../controllers/authController.js';
import manageErrors from '../middleware/manageErrors.js';

const authController = new AuthController();

router.post('/register', checkPermission('manage_users'), validate(regDetails), authController.register)
router.post('/login', manageErrors(validate(loginDetails)), manageErrors(authController.login))
router.post('/logout', authController.logout)
router.post('/generate-reset-token', validate(genTokenDetails), authController.generateResetToken)
router.get('/reset-password/:token', authController.redirectToResetPasswordPage)
router.post('/reset-password', validate(resetPwdDetails), authController.resetPassword)

export default router;