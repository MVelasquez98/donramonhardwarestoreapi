const ProviderService = require('../services/providerService.js');

const ProviderController = {
  getAllProviders: async (req, res) => {
    try {
      const providers = await ProviderService.getAllProviders();
      res.status(200).json(providers);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los proveedores: ' + error.message });
    }
  },

  getProviderConfigById: async (req, res) => {
    try {
      const providerId = req.params.id;
      const config = await ProviderService.getProviderConfigById(providerId);
      res.status(200).json(config);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la configuración del proveedor: ' + error.message });
    }
  },

  createProvider: async (req, res) => {
    try {
      const { name, config, email, telephone } = req.body;
      if (!name || !config) {
        return res.status(400).json({ error: 'Name and config are required' });
      }
      const newProvider = await ProviderService.createProvider(name, config, email, telephone);
      res.status(200).json(newProvider);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el proveedor: ' + error.message });
    }
  }
};

module.exports = ProviderController;