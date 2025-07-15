// const User = require("");
const { sendEmail } = require("../utils/email");

exports.sendVerificationEmail = async (userEmail, verificationUrl) => {
  // Send email verification link
  const emailContent = `
    <p>Thank you for signing up! Please verify your email by clicking the link below:</p>
    <a href="${verificationUrl}">Verify Email</a>
  `;

  await sendEmail(
    userEmail,
    "Verify Your Email",
    "Please verify your email",
    emailContent
  );
};
