const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    position: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {timestamps: true, useNestedStrict: true, toJSON: { virtuals: true },}
);
module.exports = mongoose.model("users", userSchema);
