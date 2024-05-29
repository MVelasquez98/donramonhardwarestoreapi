const db = require('../data/dbConfig.js');

const ProductModel = {
  createProduct: async (productData) => {
    const { code, description, price } = productData;
    const createdAt = new Date();
    const updatedAt = new Date();
  
    try {
      const [result] = await db.promise().query(
        'INSERT INTO products (code, description, price, created_at, updated_at) VALUES (?, ?, ?, ?, ?)',
        [code, description, price, createdAt, updatedAt]
      );

      return { id: result.insertId, code, description, price, createdAt, updatedAt };
    } catch (error) {
      throw error;
    }
  },
};

module.exports = ProductModel;
