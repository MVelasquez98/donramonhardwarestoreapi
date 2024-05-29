const ProductService = require('../services/productService');

const ProductController = {
  createProduct: async (req, res) => {
    try {
      const productData = req.body; 
      const product = await ProductService.createProduct(productData);
      res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto: ' + error.message });
    }
  },
};

module.exports = ProductController;
