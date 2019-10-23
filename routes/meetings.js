const express = require("express");
const router = express.Router();
const meetings = require("../controllers/meetings");

//get all
router.get("/", meetings.getAllMeetings);
//get one
router.get("/:id", meetings.getOneMeeting);
//add one
router.post("/", meetings.addOneMeeting);
//modify one
router.patch("/:id", meetings.updateOneMeeting);
//delete one
router.delete("/:id", meetings.removeOneMeeting);

module.exports = router;
