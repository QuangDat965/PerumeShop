// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

router.get('/products', productService.getProducts);
router.post('/add-product', productService.AddProduct);
router.post('/find-product', productService.FindbyId);
router.put('/update-product',productService.UpdateProduct);
router.delete('/delete-product', productService.DeleteProduct);
// Định nghĩa các endpoint khác

module.exports = router;

