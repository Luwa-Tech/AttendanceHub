import nodemailer from 'nodemailer';

const sendMail = async (to, subject, html) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.APP_PASS,
        }
    });

    const mailOptions = {
        from: process.env.USER_EMAIL,
        to,
        subject,
        html,
    };

    // create custom error type and handle properly.
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

export default sendMail;
