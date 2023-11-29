const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const createSignupMsg = (email, name) => {
  return {
    to: email,
    from: "davi95x@gmail.com",
    subject: "Signup succeeded!",
    html: `<div>
    <h1>You successfully signed up!</h1>
    <p>Hello ${name},</p>
    <p>Thank you for registering with E-commerce shop. Your account has been created. Please login to continue.</p>
    </div>`,
  };
};

exports.sendSignupEmail = (email, name) => {
  return sgMail
    .send(createSignupMsg(email, name))
    .then(console.log)
    .catch(console.error);
};

const createResetPasswordMsg = (email, token) => {
  return {
    to: email,
    from: "davi95x@gmail.com",
    subject: "Password reset",
    html: `<div>
    <h1>Reset Password</h1>
    <h2>You requested a password reset.</h2>
    <p>Please click on the following link to set a new password:</p>
    <a href="http://localhost:3000/reset/${token}">Reset Password</a>
    </div>`,
  };
};

exports.sendResetPasswordEmail = (email, token) => {
  return sgMail
    .send(createResetPasswordMsg(email, token))
    .then(console.log)
    .catch(console.error);
};
