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
  },

  getAllProducts: async (req, res) => {
    try {
      const offset = parseInt(req.query.offset) || 0;
      const limit = parseInt(req.query.limit) || 1000;
      const products = await ProductService.getAllProducts(offset, limit);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los productos: ' + error.message });
    }
  },

  getProductsByDescriptionOrCode: async (req, res) => {
    try {
      const searchTerm = req.query.term;
      const products = await ProductService.getProductsByDescriptionOrCode(searchTerm);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los productos: ' + error.message });
    }
  },

  getProductsByFilters: async (req, res) => {
    try {
      const { code, providerId } = req.query;
      const products = await ProductService.getProductsByFilters(code, providerId);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los productos: ' + error.message });
    }
  }
};

module.exports = ProductController;
