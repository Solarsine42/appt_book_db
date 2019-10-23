const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

//get all
router.get("/", users.getAllUsers);
//get one
router.get("/:id", users.getOneUser);
//add one
router.post("/", users.addOneUser);
//modify one
router.patch("/:id", users.updateOneUser);
//delete one
router.delete("/:id", users.removeOneUser);

module.exports = router;
