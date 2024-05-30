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

  createProductsInBatch: async (req, res) => {
    try {
      const { providerId, productsData } = req.body;
      const result = await ProductService.createProductsInBatch(providerId, productsData);
      res.status(201).json({ message: result });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear productos en lote: ' + error.message });
    }
  }
};

module.exports = ProductController;
