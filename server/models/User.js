const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    enum: ["Manufacturer", "Transporter"],
  },
  address: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("User", userSchema);
