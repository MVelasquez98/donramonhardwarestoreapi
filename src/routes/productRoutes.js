const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *                 format: float
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 code:
 *                   type: string
 *                 description:
 *                   type: string
 *                 price:
 *                   type: number
 *                   format: float
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */
router.post('/', ProductController.createProduct);

/**
 * @swagger
 * /products/create-in-batch:
 *   post:
 *     summary: Create products in batch
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               providerId:
 *                 type: integer
 *               productsData:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                     description:
 *                       type: string
 *                     price:
 *                       type: number
 *                       format: float
 *     responses:
 *       200:
 *         description: Batch insertion completed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */
router.post('/create-in-batch', ProductController.createProductsInBatch);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     parameters:
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         description: Offset for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Limit for pagination
 *     responses:
 *       200:
 *         description: List of all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   code:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 *                     format: float
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */
router.get('/', ProductController.getAllProducts);

/**
 * @swagger
 * /products/search:
 *   get:
 *     summary: Search products by description or code
 *     parameters:
 *       - in: query
 *         name: term
 *         schema:
 *           type: string
 *         description: Term to search for in description or code
 *     responses:
 *       200:
 *         description: List of matching products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   code:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 *                     format: float
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */
router.get('/search', ProductController.getProductsByDescriptionOrCode);

/**
 * @swagger
 * /products/filter:
 *   get:
 *     summary: Filter products by code and/or provider ID
 *     parameters:
 *       - in: query
 *         name: code
 *         schema:
 *           type: string
 *         description: Code to filter by
 *       - in: query
 *         name: providerId
 *         schema:
 *           type: integer
 *         description: Provider ID to filter by
 *     responses:
 *       200:
 *         description: List of matching products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   code:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 *                     format: float
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */
router.get('/filter', ProductController.getProductsByFilters);

module.exports = router;
