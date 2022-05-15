const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  getAllUsers
} = require('../controllers/user.controller');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getUser);
router.get('/', getAllUsers)

module.exports = router;