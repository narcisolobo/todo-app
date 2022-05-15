const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');

/* 
  @desc:    register user
  @route:   POST /api/users/register
  @access:  Public
*/
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // error handling
  if (!username || !email || !password) {
    res.status(400).json({ msg: 'Please add all fields.' });
  }

  // check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ msg: 'User already exists.' });
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // create user
  const user = await User.create({
    username,
    email,
    password: hashedPassword
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(400).json({ msg: 'Invalid user data.' });
  }
})

/* 
  @desc:    authenticate user
  @route:   POST /api/users/login
  @access:  Public
*/
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(400).json({ msg: 'Invalid credentials.' });
  }
})

/* 
  @desc:    get user data
  @route:   GET /api/users/me
  @access:  Private
*/
const getUser = asyncHandler(async (req, res) => {
  const { _id, username, email } = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    username,
    email
  })
})

const getAllUsers = asyncHandler(async (req, res) => {
  const allUsers = await User.find();
  res.json(allUsers);
})

// generate jwt
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}

module.exports = {
  registerUser,
  loginUser,
  getUser,
  getAllUsers
}