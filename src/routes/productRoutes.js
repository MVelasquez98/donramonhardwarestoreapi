const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

router.post('/', ProductController.createProduct);
router.post('/create-in-batch', ProductController.createProductsInBatch);

module.exports = router;
