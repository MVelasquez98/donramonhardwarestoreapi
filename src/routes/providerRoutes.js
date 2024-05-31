const express = require('express');
const router = express.Router();
const ProviderController = require('../controllers/providerController');

router.get('/', ProviderController.getAllProviders);
router.get('/:id/config', ProviderController.getProviderConfigById);

module.exports = router;