const mongoose = require("mongoose");
const Enum = require("enum");
const recordSchema = new mongoose.Schema(
  {
    sl_No: {
      type: Number,
    },
    name: {
      type: String,
      isRequired: true,
    },
    category: {
      type: String,
    },
    invitation_Type: {
      type: String,
      enum: ["family", "friend"],
      default: "family",
    },
    member_Count: {
      type: Number,
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
const Record = mongoose.model("record", recordSchema);
module.exports = Record;
