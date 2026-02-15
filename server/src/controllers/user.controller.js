exports.requestOrganizer = async (req, res) => {
  req.user.organizerRequest = true;
  await req.user.save();

  res.json({ message: "Organizer request submitted successfully" });
};

exports.updateProfile = async (req, res) => {
  req.user.name = req.body.name;
  await req.user.save();

  res.json({ name: req.user.name });
};
