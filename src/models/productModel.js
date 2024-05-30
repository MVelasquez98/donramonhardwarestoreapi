const connection = require('../data/dbConfig.js');

const ProductModel = {
  createProduct: async (productData) => {
    const { code, description, price } = productData;
    const createdAt = new Date();
    const updatedAt = new Date();
  
    try {
      const [result] = await connection.promise().query(
        'INSERT INTO products (code, description, price, created_at, updated_at) VALUES (?, ?, ?, ?, ?)',
        [code, description, price, createdAt, updatedAt]
      );

      return { id: result.insertId, code, description, price, createdAt, updatedAt };
    } catch (error) {
      throw error;
    }
  },

  createProductsInBatch: async (providerId, productsData) => {
    const createdAt = new Date();
    const updatedAt = new Date();
    const batchSize = 1000; // Tamaño del lote
    try {
        await connection.promise().query('START TRANSACTION');

      for (let i = 0; i < productsData.length; i += batchSize) {
        const batch = productsData.slice(i, i + batchSize);

        const values = batch.map(product => [
          providerId,
          product.code,
          product.description,
          product.price,
          createdAt,
          updatedAt
        ]);

        const sql = `
          INSERT INTO products (provider_id, code, description, price, created_at, updated_at)
          VALUES ?
          ON DUPLICATE KEY UPDATE
          description = VALUES(description),
          price = VALUES(price),
          updated_at = VALUES(updated_at)
        `;

        await connection.promise().query(sql, [values]);
      }

      await connection.promise().query('COMMIT');

      return 'Inserción en lotes completada exitosamente';
    } catch (error) {
      if (connection) {
        await connection.promise().query('ROLLBACK');
      }
      throw error;
    }
  },
    getAllProducts: async (offset, limit) => {
        try {
          const [rows] = await connection.promise().query(
            'SELECT * FROM products LIMIT ? OFFSET ?',
            [limit, offset]
          );
          return rows;
        } catch (error) {
          throw error;
        }
      },
    
      getProductsByDescription: async (description) => {
        try {
          const [rows] = await connection.promise().query(
            'SELECT * FROM products WHERE description LIKE ?',
            [`%${description}%`]
          );
          return rows;
        } catch (error) {
          throw error;
        }
      },
    
      getProductsByFilters: async (code, providerId) => {
        try {
          const query = [];
          const params = [];
    
          if (code) {
            query.push('code = ?');
            params.push(code);
          }
          if (providerId) {
            query.push('provider_id = ?');
            params.push(providerId);
          }
    
          const whereClause = query.length ? 'WHERE ' + query.join(' AND ') : '';
          const sql = `SELECT * FROM products ${whereClause}`;
    
          const [rows] = await connection.promise().query(sql, params);
          return rows;
        } catch (error) {
          throw error;
        }
      }   
};

module.exports = ProductModel;
