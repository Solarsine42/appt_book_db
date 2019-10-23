const express = require("express");
const router = express.Router();
const appts = require("../controllers/appts");

//get all
router.get("/", appts.getAllAppts);
//get one
router.get("/:id", appts.getOneAppt);
//add one
router.post("/", appts.addOneAppt);
//modify one
router.patch("/:id", appts.updateOneAppt);
//delete one
router.delete("/:id", appts.removeOneAppt);

module.exports = router;
