const authService = require("../services/auth.service");
// const { generateToken } = require("../utils/jwt");
const { generateAccessToken, generateRefreshToken } = require("../utils/jwt");
const httpStatus = require("http-status");
const crypto = require("crypto");
const emailService = require("../services/email.service");
const { sendEmail } = require("../utils/email");
const jwt = require("jsonwebtoken");

//signup controller
exports.signup = async (req, res) => {
  const existingUser = await authService.findUserByEmail(req.body.email);
  if (existingUser)
    return res.status(409).json({ msg: "Email already in use" });

  const user = await authService.createUser(req.body);
  // Generate email verification token
  const emailVerificationToken = crypto.randomBytes(32).toString("hex");
  const emailVerificationTokenExpiration = Date.now() + 3600000;

  user.emailVerificationToken = emailVerificationToken;
  user.emailVerificationTokenExpiration = emailVerificationTokenExpiration;

  // Send email (use your email service here)
  // const verificationUrl = `http://localhost:8080/verify-email?token=${emailVerificationToken}`;
  // await emailService.sendVerificationEmail(user.email, verificationUrl);

  const verificationLink = `${process.env.CLIENT_URL}/api/auth/verify-email?token=${emailVerificationToken}`;
  // console.log(verificationLink);
  // Send email verification link
  const emailContent = `
  <html>
    <body>
      <p>Thank you for signing up!</p>
      <p>Please verify your email by clicking the link below:</p>
      <a href="${verificationLink}" style="display: inline-block; padding: 10px 15px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Verify Email</a>
    </body>
  </html>
`;

  // console.log(process.env.EMAIL_PASS, process.env.EMAIL_USER);
  await sendEmail(
    user.email,
    "Verify Your Email",
    "Please verify your email",
    emailContent
  );
  await user.save();
  // Auth token for login/session
  // const token = generateToken(user);
  const accessToken = generateAccessToken(user);
  res.status(201).json({
    user: { id: user._id, name: user.name, email: user.email },
    accessToken,
    message: "Signup successful, please check your email to verify.",
  });
};

exports.login = async (req, res) => {
  const user = await authService.findUserByEmail(req.body.email);
  if (!user || !user.isActive) {
    return res
      .status(400)
      .json({ error: "Invalid credentials or email not verified" });
  }
  const isMatch = await user.comparePassword(req.body.password);
  if (!isMatch)
    return res
      .status(400)
      .json({ error: "Invalid credentials password is not same" });

  // const token = generateToken(user);
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  console.log(accessToken, refreshToken);

  res.status(200).json({
    user: { id: user._id, name: user.name, email: user.email },
    // token,
    accessToken,
    refreshToken,
  });
};

//verify-email
exports.verifyEmail = async (req, res) => {
  const { token } = req.query;
  console.log("token", token);
  const user = await authService.findByEmailWithTokenVerification(token);

  if (!user) {
    return res.status(400).json({ error: "Invalid or expired token" });
  }

  user.isActive = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationTokenExpiration = undefined;
  await user.save();

  res.status(200).json({ message: "Email verified successfully!" });
};

// Refresh Token Route
exports.refreshToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ error: "Refresh token is required" });
  }

  jwt.verify(
    refreshToken,
    process.env.JWT_REFRESH_SECRET,
    async (err, user) => {
      if (err) {
        return res.status(403).json({ error: "Invalid refresh token" });
      }

      const newAccessToken = generateAccessToken(user);
      res.status(200).json({ accessToken: newAccessToken });
    }
  );
};
