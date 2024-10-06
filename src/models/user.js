const mongoose = require("mongoose");
const Enum = require("enum");
const userSchema = new mongoose.Schema(
  {
    fname: {
      type: Number,
      isRequired: true,
    },
    lname: {
      type: String,
      isRequired: true,
    },
    address: {
      type: String,
      isRequired: true,
    },
    phone_No: {
      type: String,
      isRequired: true,
    },
  },
  { timestamps: true }
);
const Users = mongoose.model("users", userSchema);
module.exports = Users;
