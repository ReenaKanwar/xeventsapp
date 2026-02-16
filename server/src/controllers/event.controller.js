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



// ✅ ADD THIS FUNCTION BELOW
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch events",
      error: error.message,
    });
  }
};
