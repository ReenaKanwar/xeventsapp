const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },

  email: { type: String, required: true, unique: true },

  password: { type: String, required: true },

  avatar: { type: String },

  role: {
    type: String,
    enum: ["Participant", "Organizer", "Admin"],
    default: "Participant",
  },

  organizerRequest: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
