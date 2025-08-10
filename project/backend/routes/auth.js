const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  gooleLoginUser,
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');


router.post('/google-login-api', gooleLoginUser)
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router;