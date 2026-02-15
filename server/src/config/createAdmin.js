const bcrypt = require("bcryptjs");
const User = require("../models/User.model");

const createAdmin = async () => {
  const adminExists = await User.findOne({
    email: "crio.do.test@example.com",
  });

  if (!adminExists) {
    const hashedPassword = await bcrypt.hash("12345678", 10);

    await User.create({
      name: "Admin",
      email: "crio.do.test@example.com",
      password: hashedPassword,
      role: "Admin",
    });

    console.log("Admin user created ✅");
  }
};

module.exports = createAdmin;
