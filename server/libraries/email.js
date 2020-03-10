/*jshint esversion: 8*/
const nodemailer = require('nodemailer');
const mainEmail = 'centrocrecer19@gmail.com';

class email {
    constructor() {
        this.transport = nodemailer.createTransport({
            service: 'gmail',
            port: 8000,
            secure: false,
            auth: {
                user: mainEmail,
                pass: 'fabrica-swcC19'
            },
            tls: {
                rejectUnauthorized: false
            }
        });
    }

    sendEmail(strCorreo) {

        const emailBody = {
            from: mainEmail,
            to: strCorreo,
            subject: 'holaaa',
            text: 'Andris Reinman <andris+123@kreata.ee>, andris.reinman@gmail.comd',
            html: "<body style='color:red;'>hgfhfh</body>"

        };

        this.transport.sendMail(emailBody, (err) => {
            if (err) {
                return console.log(err.message);
            }
        });
    }
}

module.exports = new email();