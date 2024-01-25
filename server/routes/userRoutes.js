const express = require("express");
const { registerUser, loginUser } = require("../controller/userControllers");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
