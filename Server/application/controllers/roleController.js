// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const roleService = require('../services/roleService');

router.get('/get-role', roleService.getRoles);
router.post('/add-role', roleService.AddRole);
module.exports = router;
