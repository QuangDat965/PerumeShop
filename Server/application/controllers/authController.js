// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const authService = require('../services/authService')

router.post('/login', authService.Login);
router.post('/register', authService.Register);


// Định nghĩa các endpoint khác

module.exports = router;
