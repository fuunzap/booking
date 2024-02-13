/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       properties:
 *         ServiceID:
 *           type: integer
 *           description: The auto-generated id of the service.
 *         ServiceName:
 *           type: string
 *           description: The name of the service.
 *         Description:
 *           type: string
 *           description: Description of the service.
 *         Price:
 *           type: number
 *           description: The price of the service.
 */

/**
 * @swagger
 * /api/services:
 *   get:
 *     summary: Retrieve a list of services.
 *     description: Retrieve a list of services.
 *     responses:
 *       200:
 *         description: A list of services.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 */

/**
 * @swagger
 * /api/services:
 *   post:
 *     summary: Create a new service.
 *     description: Create a new service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       201:
 *         description: The created service.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 */

/**
 * @swagger
 * /api/services/{id}:
 *   put:
 *     summary: Update a service by ID.
 *     description: Update a service by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the service to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: The updated service.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       404:
 *         description: Service not found.
 */

/**
 * @swagger
 * /api/services/{id}:
 *   delete:
 *     summary: Delete a service by ID.
 *     description: Delete a service by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the service to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The service was successfully deleted.
 *       404:
 *         description: Service not found.
 */

const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.get('/services', serviceController.getAllServices);
router.post('/services', serviceController.createService);
router.put('/services/:id', serviceController.updateService);
router.delete('/services/:id', serviceController.deleteService);

module.exports = router;
