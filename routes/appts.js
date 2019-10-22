const express = require("express");
const router = express.Router();
const appts = require("../controllers/appts");

router.get("/", appts.getAllAppts);
router.get("/:id", appts.getOneAppt);
router.post("/", appts.addOneAppt);
router.patch("/:id", appts.updateOneAppt);
router.delete("/:id", appts.removeOneAppt);

module.exports = router;
