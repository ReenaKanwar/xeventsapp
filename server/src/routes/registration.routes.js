const router = require("express").Router();
const auth = require("../middleware/auth.middleware");

const {
  registerEvent,
  cancelRegistration,
} = require("../controllers/registration.controller");

router.post("/:eventId", auth, registerEvent);
router.delete("/:eventId", auth, cancelRegistration);

module.exports = router;
