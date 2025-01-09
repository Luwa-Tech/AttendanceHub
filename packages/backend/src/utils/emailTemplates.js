export const onboardEmail = (result, pwd) => {
    const template = {
        subject: 'Welcome to AttendanceHub!',
        html:  `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Welcome to BP Refinery!</title>
        </head>
        <body>
            <p>Dear ${result.firstname},</p>
    
            <p>Congratulations and welcome to <strong>BP Refinery</strong>! We are thrilled to have you join our Company as a <strong>${result.jobTitle}</strong>.</p>
    
            <p>To get you started, here are your login details:</p>
            <ul>
                <li><strong>Employee ID</strong>: ${result.employeeId}</li>
                <li><strong>Temporary Password</strong>: ${pwd}</li>
            </ul>
    
            <p>Please use these credentials to log in to our employee portal at <a href="https://attendancehub-client.onrender.com">BP Refinery</a>. For security reasons, it is compulsory that you change your password as soon as you log in. This will help protect your account and ensure your personal information remains secure.</p>
    
            <p>Once again, welcome! We look forward to working with you and achieving great things together.</p>
    
            <p>Best regards,</p>
            <p>BP Refinery</p>
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

                <p>We received a request to reset your password for your account at <strong>BP Refinery</strong>. If you did not make this request, please ignore this email and your password will remain unchanged.</p>

                <p>To reset your password, please click on the link below or paste it into your browser:</p>
                <p><a href="${resetLink}">Reset Password</a></p>

                <p><strong>Note:</strong> This link will expire in 15 minutes for security reasons.</p>

                <p>Best regards,</p>
                <p>BP Refinery</p>
            </body>
            </html>
        `
    };
    
    return template;
};
