const mongoose = require("mongoose");

const User = mongoose.model(
  "Utiliisateur",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ],
    state: {
      type: String,
      enum: ["pending", "active", "disabled"],
      default: "pending"
    },
    verificationCode: {
      type: String,
      unique: true,
      sparse: true
    }
  })
);

module.exports = User;
