const connection = require('../data/dbConfig.js');

const ProviderModel = {
  getAllProviders: async () => {
    try {
      const [rows] = await connection.promise().query('SELECT id, name FROM providers');
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getProviderConfigById: async (providerId) => {
    try {
      const [rows] = await connection.promise().query('SELECT config FROM providers WHERE id = ?', [providerId]);
      if (rows.length > 0) {
        return rows[0].config;
      } else {
        throw new Error('Provider not found');
      }
    } catch (error) {
      throw error;
    }
  }
};

module.exports = ProviderModel;
