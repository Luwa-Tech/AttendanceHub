import express from 'express';
import AuthController from '../controllers/AuthController';
import checkPermission from '../middleware/checkPermission';
// import manageErrors from '../middleware/manageErrors';
import { loginDetails, regDetails, validate, genTokenDetails, resetPwdDetails } from '../middleware/validate';

const router = express.Router();

const authController = new AuthController();


router.post('/register', validate(regDetails), checkPermission('manage_users'), authController.register)
router.post('/login', validate(loginDetails), authController.login)
router.post('/logout', authController.logout)
router.post('/generate-reset-token', validate(genTokenDetails), authController.generateResetToken)
router.get('/reset-password/:token', authController.redirectToResetPasswordPage)
router.post('/reset-password', validate(resetPwdDetails), authController.resetPassword)

export default router;