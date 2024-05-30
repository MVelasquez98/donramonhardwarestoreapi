const ProductModel = require('../models/productModel.js');

const ProductService = {
  createProduct: async (productData) => {
    try {
      const product = await ProductModel.createProduct(productData);
      return product;
    } catch (error) {
      throw error;
    }
  },
  createProductsInBatch: async (providerId, productsData) => {
    try {
      const result = await ProductModel.createProductsInBatch(providerId, productsData);
      return result;
    } catch (error) {
      throw error;
    }
  },

  getAllProducts: async (offset, limit) => {
    try {
      const products = await ProductModel.getAllProducts(offset, limit);
      return products;
    } catch (error) {
      throw error;
    }
  },

  getProductsByDescription: async (description) => {
    try {
      const products = await ProductModel.getProductsByDescription(description);
      return products;
    } catch (error) {
      throw error;
    }
  },

  getProductsByFilters: async (code, providerId) => {
    try {
      const products = await ProductModel.getProductsByFilters(code, providerId);
      return products;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = ProductService;
