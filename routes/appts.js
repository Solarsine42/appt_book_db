const express = require("express");
const router = express.Router();
const appts = require("../controllers/appts");

router.get("/", appts.getAllappts);
router.get("/:id", appts.getOneUser);
router.post("/", appts.addOneUser);
router.patch("/:id", appts.updateOneUser);
router.delete("/:id", appts.removeOneUser);

module.exports = router;
