const router = require("express").Router();
const auth = require("../middleware/auth.middleware");

const {
  requestOrganizer,
  updateProfile,
} = require("../controllers/user.controller");

router.put("/request-organizer", auth, requestOrganizer);
router.put("/profile", auth, updateProfile);

module.exports = router;
