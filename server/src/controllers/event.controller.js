const Event = require("../models/event.model");

exports.createEvent = async (req, res) => {
  const event = await Event.create({
    ...req.body,
    organizer: req.user._id,
  });

  res.status(201).json(event);
};

exports.updateEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json({
    message: "Event updated",
    event,
  });
};

exports.getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id);

  res.json(event);
};
