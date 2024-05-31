const ProviderModel = require('../models/providerModel.js');

const ProviderService = {
  getAllProviders: async () => {
    try {
      const providers = await ProviderModel.getAllProviders();
      return providers;
    } catch (error) {
      throw error;
    }
  },

  getProviderConfigById: async (providerId) => {
    try {
      const config = await ProviderModel.getProviderConfigById(providerId);
      return config;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = ProviderService;