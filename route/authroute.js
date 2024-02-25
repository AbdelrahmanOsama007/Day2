const express = require("express");
const router = express.Router();

const authController = require("../controller/authcontroler");
router.post("/login", authController.hashedLogin);

module.exports = router;