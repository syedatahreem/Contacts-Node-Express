const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/validateToken");

const {
  registerUser,
  loginUser,
  retrieveCurrentUser,
} = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, retrieveCurrentUser);

module.exports = router;
