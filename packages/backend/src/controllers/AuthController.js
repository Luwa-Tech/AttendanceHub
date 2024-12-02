import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import RoleService from '../service/roleService';
import EmployeeService from '../service/employeeService';
import { matchedData } from 'express-validator'
import { InputError } from '../utils/errors';
import crypto from 'crypto';
import sendMail from '../config/sendMail';
import { onboardEmail, passwordResetEmail } from '../utils/emailTemplates';

class AuthController {
    constructor() {
        this.roleService = new RoleService();
        this.employeeService = new EmployeeService();
    }

    register = async (req, res) => {
        const data = matchedData(req);

        const checkEmail = await this.employeeService.checkEmail(data.email);
        if (checkEmail) {
            res.status(409).json({ message: `Email ${data.email} already in use` });
        }

        const role = await this.roleService.getRoleByName(data.role);
        const hashedPwd = await bcrypt.hash(data.password, 10);
        const employeeDetails = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: hashedPwd,
            jobRole: data.jobRole,
            roleId: role._id
        };
        const result = await this.employeeService.createNewEmployee(employeeDetails);

        // Login ID might be too long for the user.
        // change for better user experience.
        const template = onboardEmail(result, data.password);

        await sendMail(result.email, template.subject, template.html);

        res.status(201).json({ employee: result });
    }

    login = async (req, res) => {
        const data = matchedData(req);
        const findEmployee = await this.employeeService.getEmployeeById(data.userId);

        const match = bcrypt.compare(data.password, findEmployee.password);
        if (!match) {
            throw new InputError('Passwords do not match');
        };

        const token = jwt.sign({ id: findEmployee._id, email: findEmployee.email }, process.env.ACCESS_KEY);
        res.cookie('access_token', token, { httpOnly: true }).status(200).json({ 'message': 'Employee logged in' });
    }

    // Implement changePassword controller

    logout = async (req, res) => {
        res.clearCookie('access_token').status(200).json({ 'message': 'logged out successfully' });
    }

    generateResetToken = async (req, res) => {
        const data = matchedData(req);

        const findEmployee = await this.employeeService.getEmployeeByEmail(data.email);
        console.log(findEmployee);

        // generate reset token
        const token = crypto.randomBytes(20).toString('hex');
        findEmployee.resetPasswordToken = token;
        findEmployee.resetPasswordExpires = Date.now() + 15 * 60 * 1000; // 15 minutes expiration time
        await findEmployee.save();

        // Add client domain
        const resetLink = `http://your-client-domain.com/reset/${token}`;

        const template = passwordResetEmail(findEmployee, resetLink);

        await sendMail(findEmployee.email, template.subject, template.html)

        res.status(200).send('Password reset email sent');
    }

    redirectToResetPasswordPage = async (req, res) => {
        const resetInfo = {
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() }
        };

        await this.employeeService.checkEmployeeResetTokenExpiration(resetInfo);

        // redirect to client reset page
        res.redirect('', { token: req.params.token });
    }

    resetPassword = async (req, res) => {
        const resetInfo = {
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() }
        };

        const result = await this.employeeService.checkEmployeeResetTokenExpiration(resetInfo);

        const data = matchedData(req);
        // compare passwords
        if (data.newPassword !== data.confirmPassword) {
            throw new InputError('Passwords do not match');
        }

        const hashedPwd = bcrypt.hash(data.newPassword, 10);
        result.password = hashedPwd;
        result.resetPasswordToken = undefined;
        result.resetPasswordExpires = undefined;
        await result.save();

        res.status(200).json({ message: 'Password has been reset' });
    }
}

export default AuthController;