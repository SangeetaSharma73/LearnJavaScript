const User = require("../models/user.model");

exports.createUser = async (userData) => {
  return await User.create(userData);
};

exports.findUserByEmail = async (email) => {
  //   console.log(email, User.findOne({ email }));
  return await User.findOne({ email }).select("+password");
};

exports.findByEmailWithTokenVerification = async (token) => {
  return await User.findOne({
    emailVerificationToken: token,
    emailVerificationTokenExpiration: { $gt: Date.now() },
  });
};
