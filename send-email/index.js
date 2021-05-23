require("dotenv").config();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

let mailOptions = {
  from: process.env.EMAIL_ADDRESS,
  to: "target@gmail.com", // alco can send to multiple email address eg: a@gmail, b@gmail ...
  subject: "Hello world",
  text: "Test send email",
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
