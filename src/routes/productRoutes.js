const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

router.post('/', ProductController.createProduct);
router.post('/create-in-batch', ProductController.createProductsInBatch);
router.get('/', ProductController.getAllProducts);
router.get('/search', ProductController.getProductsByDescription);
router.get('/filter', ProductController.getProductsByFilters);

module.exports = router;
