const User = require("../models/User.model");

exports.getOrganizerRequests = async (req, res) => {
  const requests = await User.find({ organizerRequest: true });

  res.json(requests);
};

exports.approveOrganizer = async (req, res) => {
  const user = await User.findById(req.params.id);

  user.role = "Organizer";
  user.organizerRequest = false;
  await user.save();

  res.json({ message: "User approved as Organizer" });
};
