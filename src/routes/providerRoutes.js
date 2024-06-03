const express = require('express');
const router = express.Router();
const ProviderController = require('../controllers/providerController');

/**
 * @swagger
 * /providers:
 *   get:
 *     summary: Get all providers
 *     responses:
 *       200:
 *         description: List of all providers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   config:
 *                     type: object
 */
router.get('/', ProviderController.getAllProviders);
/**
 * @swagger
 * /providers:
 *   post:
 *     summary: Create a new provider
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               config:
 *                 type: object
 *               email:
 *                 type: string
 *               telephone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully created
 *       400:
 *         description: Bad request
 */
router.post('/', ProviderController.createProvider);
/**
 * @swagger
 * /providers/{id}/config:
 *   get:
 *     summary: Get provider config by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the provider
 *     responses:
 *       200:
 *         description: Provider configuration
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/:id/config', ProviderController.getProviderConfigById);

module.exports = router;