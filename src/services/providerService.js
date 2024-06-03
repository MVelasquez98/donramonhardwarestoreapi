const ProviderModel = require('../models/providerModel.js');

const ProviderService = {
  getAllProviders: async () => {
    try {
      const providers = await ProviderModel.getAllProviders();
      const cleanedProviders = providers.map(provider => {
        const cleanedProvider = {
          id: provider.id,
          name: provider.name,
          config: provider.config
        };
        if (provider.telephone) {
          cleanedProvider.telephone = provider.telephone;
        }
        if (provider.email) {
          cleanedProvider.email = provider.email;
        }
        return cleanedProvider;
      });
      return cleanedProviders;
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
  },

  createProvider: async (name, config, email, telephone) => {
    try {
      const newProvider = await ProviderModel.createProvider(name, config, email, telephone);
      return newProvider;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = ProviderService;