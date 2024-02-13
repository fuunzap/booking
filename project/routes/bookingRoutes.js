/**
 * @swagger
 * components:
 *   schemas:
 *     Booking:
 *       type: object
 *       properties:
 *         BookingID:
 *           type: integer
 *           description: The auto-generated id of the booking.
 *         RoomID:
 *           type: integer
 *           description: The id of the room being booked.
 *         GuestID:
 *           type: integer
 *           description: The id of the guest making the booking.
 *         CheckinDate:
 *           type: string
 *           format: date
 *           description: The check-in date of the booking.
 *         CheckoutDate:
 *           type: string
 *           format: date
 *           description: The check-out date of the booking.
 *         Status:
 *           type: string
 *           enum: [confirm, pending, canceled]
 *           description: The status of the booking.
 */

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Retrieve a list of bookings.
 *     description: Retrieve a list of bookings.
 *     responses:
 *       200:
 *         description: A list of bookings.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Booking'
 */

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Create a new booking.
 *     description: Create a new booking.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       201:
 *         description: The created booking.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 */

/**
 * @swagger
 * /api/bookings/{id}:
 *   put:
 *     summary: Update a booking by ID.
 *     description: Update a booking by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the booking to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       200:
 *         description: The updated booking.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       404:
 *         description: Booking not found.
 */

/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     summary: Delete a booking by ID.
 *     description: Delete a booking by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the booking to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The booking was successfully deleted.
 *       404:
 *         description: Booking not found.
 */

const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/bookings', bookingController.getAllBookings);
router.post('/bookings', bookingController.createBooking);
router.put('/bookings/:id', bookingController.updateBooking);
router.delete('/bookings/:id', bookingController.deleteBooking);

module.exports = router;

