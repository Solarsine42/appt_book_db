const express = require("express");
const router = express.Router();
const meetings = require("../controllers/meetings");

router.get("/", meetings.getAllMeetings);
router.get("/:id", meetings.getOneMeeting);
router.post("/", meetings.addOneMeeting);
router.patch("/:id", meetings.updateOneMeeting);
router.delete("/:id", meetings.removeOneMeeting);

module.exports = router;
