const Registration = require("../models/registration.model");

exports.registerEvent = async (req, res) => {
  await Registration.create({
    user: req.user._id,
    event: req.params.eventId,
  });

  res.status(201).json({ message: "Registered successfully" });
};

exports.cancelRegistration = async (req, res) => {
  await Registration.findOneAndDelete({
    user: req.user._id,
    event: req.params.eventId,
  });

  res.json({ message: "Registration cancelled" });
};
