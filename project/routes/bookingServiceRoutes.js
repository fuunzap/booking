/**
 * @swagger
 * components:
 *   schemas:
 *     BookingService:
 *       type: object
 *       properties:
 *         BookingServiceID:
 *           type: integer
 *           description: The auto-generated id of the booking service.
 *         BookingID:
 *           type: integer
 *           description: The id of the booking associated with this service.
 *         ServiceID:
 *           type: integer
 *           description: The id of the service associated with this booking.
 */

/**
 * @swagger
 * /api/bookingServices:
 *   get:
 *     summary: Retrieve a list of booking services.
 *     description: Retrieve a list of booking services.
 *     responses:
 *       200:
 *         description: A list of booking services.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BookingService'
 */

/**
 * @swagger
 * /api/bookingServices:
 *   post:
 *     summary: Create a new booking service.
 *     description: Create a new booking service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookingService'
 *     responses:
 *       201:
 *         description: The created booking service.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookingService'
 */

/**
 * @swagger
 * /api/bookingServices/{id}:
 *   put:
 *     summary: Update a booking service by ID.
 *     description: Update a booking service by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the booking service to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookingService'
 *     responses:
 *       200:
 *         description: The updated booking service.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookingService'
 *       404:
 *         description: Booking service not found.
 */

/**
 * @swagger
 * /api/bookingServices/{id}:
 *   delete:
 *     summary: Delete a booking service by ID.
 *     description: Delete a booking service by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the booking service to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The booking service was successfully deleted.
 *       404:
 *         description: Booking service not found.
 */

const express = require('express');
const router = express.Router();
const bookingServiceController = require('../controllers/bookingServiceController');

router.get('/bookingServices', bookingServiceController.getAllBookingServices);
router.post('/bookingServices', bookingServiceController.createBookingService);
router.put('/bookingServices/:id', bookingServiceController.updateBookingService);
router.delete('/bookingServices/:id', bookingServiceController.deleteBookingService);

module.exports = router;
