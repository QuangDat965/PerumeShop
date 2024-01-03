// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const categoryService = require('../services/categoryService')

router.get('/get-catg', categoryService.GetAll);
router.post('/add-catg', categoryService.AddCatg);

// Định nghĩa các endpoint khác

module.exports = router;
