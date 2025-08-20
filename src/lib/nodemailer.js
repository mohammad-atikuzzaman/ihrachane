import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail", // বা তুমি চাইলে অন্য SMTP দিতে পারো
  auth: {
    user: process.env.EMAIL_USER, // তোমার Gmail বা SMTP email
    pass: process.env.EMAIL_PASS, // App password (Gmail হলে App password লাগবে)
  },
});

export const mailOptions = {
  from: process.env.EMAIL_USER,
};
