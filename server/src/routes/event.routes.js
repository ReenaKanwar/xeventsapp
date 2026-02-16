const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

const {
  createEvent,
  updateEvent,
  getEventById,
  getAllEvents, // ✅ import
} = require("../controllers/event.controller");

// ✅ GET ALL EVENTS (Public)
router.get("/", getAllEvents);

// Create Event
router.post("/", auth, role("Admin", "Organizer"), createEvent);

// Update Event
router.put("/:id", auth, role("Admin", "Organizer"), updateEvent);

// Get Event By ID
router.get("/:id", auth, getEventById);

module.exports = router;
