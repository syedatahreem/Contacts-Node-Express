const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  retrieveCurrentUser,
} = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", retrieveCurrentUser);

module.exports = router;
