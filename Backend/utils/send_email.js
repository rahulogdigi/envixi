const nodemailer = require('nodemailer');

const send_email = async (email, subject, html) => {

    try {

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            service: 'gmail',
            port: 587,
            // secure: true,
            auth: {
                user: process.env.SENDER_EMAILD,
                pass: process.env.SENDER_EMAILD_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.SENDER_EMAILD,
            to: email,
            subject: subject,
            html: html,
        });

        console.log("email sent sucessfully");
        
    } catch (error) {
        console.log(error, "email not sent");
    }

}

module.exports = send_email;