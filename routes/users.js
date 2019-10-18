const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

router.get("/", users.getAllUsers);
router.get("/:id", users.getOneUser);
router.post("/", users.addOneUser);
router.patch("/:id", users.updateOneUser);
router.delete("/:id", users.removeOneUser);

module.exports = router;
