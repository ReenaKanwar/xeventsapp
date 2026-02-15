const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

const {
  getOrganizerRequests,
  approveOrganizer,
} = require("../controllers/admin.controller");

router.get("/organizer-requests", auth, role("Admin"), getOrganizerRequests);

router.put(
  "/users/:id/approve-organizer",
  auth,
  role("Admin"),
  approveOrganizer
);

module.exports = router;
