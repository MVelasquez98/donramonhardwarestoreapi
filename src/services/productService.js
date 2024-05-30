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
  }
};

module.exports = ProductService;
