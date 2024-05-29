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
};

module.exports = ProductService;
