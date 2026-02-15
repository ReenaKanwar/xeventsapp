const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

const {
  createEvent,
  updateEvent,
  getEventById,
} = require("../controllers/event.controller");

router.post("/", auth, role("Admin", "Organizer"), createEvent);
router.put("/:id", auth, role("Admin", "Organizer"), updateEvent);
router.get("/:id", auth, getEventById);

module.exports = router;
