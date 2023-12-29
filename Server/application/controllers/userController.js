// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

router.get('/users', userService.getUsers);
router.post('/add-user', userService.AddUser);
router.post('/find-user', userService.FinbyId);
router.put('/update-user', userService.UpdateUser);
router.delete('/delete-user', userService.DeleteUser);
// Định nghĩa các endpoint khác

module.exports = router;
