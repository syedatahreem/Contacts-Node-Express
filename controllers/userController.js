const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//@desc Register the user
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const userExsists = await User.findOne({ email });
  if (userExsists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    userName: name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc Login the user
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User logged in successfully" });
});

//@desc Retrieve current user
//@route GET /api/users/current
//@access private

const retrieveCurrentUser = asyncHandler(async (req, res) => {
  // User retrieval logic here
  res.status(200).json({ message: "User profile retrieved successfully" });
});

module.exports = {
  registerUser,
  loginUser,
  retrieveCurrentUser,
};
