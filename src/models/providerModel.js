const connection = require('../data/dbConfig.js');

const ProviderModel = {
  getAllProviders: async () => {
    try {
      const [rows] = await connection.promise().query('SELECT id, name, email, telephone FROM providers');
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
  },

  createProvider: async (name, config, email, telephone) => {
    try {
      const [result] = await connection.promise().query('INSERT INTO providers (name, config, email, telephone) VALUES (?, ?, ?, ?)', [name, JSON.stringify(config), email, telephone]);
      const newProviderId = result.insertId;
      return { id: newProviderId, name, config, email };
    } catch (error) {
      throw error;
    }
  }
};

module.exports = ProviderModel;
