const express = require("express");
const router = express.Router();
const { registerEmail } = require("../controllers/serverControllers");
router.route("/register").post(registerEmail);
module.exports = router;
