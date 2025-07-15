const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Email is invalid"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
      select: false,
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    emailVerificationToken: { type: String },
    emailVerificationTokenExpiration: { type: Date },
    isActive: { type: Boolean, default: false }, // // User is inactive until email is verified
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const saltRounds = 10;
  // console.log("Hashing password: ", this.password);
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  // console.log(candidatePassword);
  return await bcrypt.compare(candidatePassword, this.password);
};

// // Indexing for performance (optional)
// userSchema.index({ email: 1 }); if we use unique:true in email so we don't need
// userSchema.index({ email: 1 }, { unique: true }); comment unique if you want to use this other than that unique create index

const User = mongoose.model("User", userSchema);
//export model
module.exports = User;
