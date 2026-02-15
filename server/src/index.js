const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const connectDB = require("./config/db");
const createAdmin = require("./config/createAdmin");

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

const startServer = async () => {
  await connectDB();
  await createAdmin();


  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
};

startServer();
