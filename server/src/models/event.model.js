const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,

  startDate: String,
  startTime: String,

  endDate: String,
  endTime: String,

  location: String,
  eventType: String,
  category: String,
  image: String,

  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Event", eventSchema);
