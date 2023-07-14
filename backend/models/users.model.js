const mongoose = require("mongoose");

//Schema
const userSchema = mongoose.Schema(
  {
    first: { type: String },
    last: { type: String },
    email: { type: String, required: true },
    department: String,
    salary: Number,
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

//Model
const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
