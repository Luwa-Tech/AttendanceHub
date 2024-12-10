export const onboardEmail = (employee, pwd) => {
    const template = {
        subject: 'Welcome to AttendanceHub!',
        html:  `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Welcome to AttendanceHub!</title>
        </head>
        <body>
            <p>Dear ${employee.firstname},</p>
    
            <p>Congratulations and welcome to <strong>[Your Company Name]</strong>! We are thrilled to have you join our Company as a <strong>${result.jobRole}</strong>.</p>
    
            <p>To get you started, here are your login details:</p>
            <ul>
                <li><strong>Employee ID</strong>: ${employee.employeeId}</li>
                <li><strong>Temporary Password</strong>: ${pwd}</li>
            </ul>
    
            <p>Please use these credentials to log in to our employee portal at <a href="[ADD CLIENT URL HERE]">[ADD CLIENT URL NAME HERE]</a>. For security reasons, it is compulsory that you change your password as soon as you log in. This will help protect your account and ensure your personal information remains secure.</p>
    
            <p>To change your password, follow these steps:</p>
            <ol>
                <li>Log in to the employee portal using the temporary password provided.</li>
                <li>Navigate to the "Account Settings" or "Profile" section.</li>
                <li>Select "Change Password" and follow the prompts to set a new password.</li>
            </ol>
    
            <p>Once again, welcome! We look forward to working with you and achieving great things together.</p>
    
            <p>Best regards,</p>
            <p>AttendanceHub</p>
        </body>
        </html>
    `
    }
    return template;
};

export const passwordResetEmail = (employee, resetLink) => {
    const template = {
        subject: 'Password Reset Request',
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Password Reset Request</title>
            </head>
            <body>
                <p>Dear ${employee.firstname},</p>

                <p>We received a request to reset your password for your account at <strong>[Your Company Name]</strong>. If you did not make this request, please ignore this email and your password will remain unchanged.</p>

                <p>To reset your password, please click on the link below or paste it into your browser:</p>
                <p><a href="${resetLink}">Reset Password</a></p>

                <p><strong>Note:</strong> This link will expire in 15 minutes for security reasons.</p>

                <p>Best regards,</p>
                <p>AttendanceHub</p>
            </body>
            </html>
        `
    };
    
    return template;
};
