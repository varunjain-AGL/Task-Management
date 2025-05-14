const nodemailer = require('nodemailer');

require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com', // using brevo for sending mail with nodemailer functionality
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER, //getting user from .env file
    pass: process.env.EMAIL_PASS, //getting password from .env file
  },
});

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });


const sendEmail = async (subject, text, to) => {
  await transporter.sendMail({
    from: 'varun.jain@adglobal360.com', //email id with the help of which account created on brevo
    to,
    subject,
    text,
  });
};

module.exports = sendEmail;

//On console  showing email and password key created by brevo
console.log('Email:', process.env.EMAIL_USER);
console.log('Pass:', process.env.EMAIL_PASS);
