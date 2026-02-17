const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const connectDB = require("./config/db");
const createAdmin = require("./config/createAdmin");

// ✅ Import Event Model
const Event = require("./models/event.model");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/admin", require("./routes/admin.routes"));
app.use("/api/events", require("./routes/event.routes"));
app.use("/api/registration", require("./routes/registration.routes"));

app.get("/", (req, res) => {
  res.send("Backend Running Successfully 🚀");
});

// ✅ Seeder Function
async function seedEvent() {
  const existing = await Event.findOne({
    title: "updated test event 123",
  });

  if (!existing) {
    await Event.create({
      title: "updated test event 123",
      location: "Ranchi",
      image: "https://via.placeholder.com/400x200",
      status: "Upcoming",
    });

    console.log("✅ Seed Event inserted");
  }
}

const startServer = async () => {
  await connectDB();
  await createAdmin();

  // ✅ Seed event for Cypress test
  await seedEvent();

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
