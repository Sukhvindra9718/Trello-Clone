const nodemailer = require("nodemailer");


const sendEmail = async (options) => {
  var transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    service: "gmail",
    port: process.env.SMPT_PORT,
    secure: false,
    auth: {
      user: `${process.env.SMPT_MAIL}`,
      pass: `${process.env.SMPT_PASSWORD}`,
    },
  });
  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject,
    html: options.message,
  };
  transporter.sendMail(mailOptions, function (error, Info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent : ` + Info.response);
    }
  });
};
module.exports = sendEmail;