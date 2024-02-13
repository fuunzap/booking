/**
 * @swagger
 * components:
 *   schemas:
 *     Guest:
 *       type: object
 *       properties:
 *         GuestID:
 *           type: integer
 *           description: The auto-generated id of the guest.
 *         FirstName:
 *           type: string
 *           description: The first name of the guest.
 *         LastName:
 *           type: string
 *           description: The last name of the guest.
 *         Email:
 *           type: string
 *           format: email
 *           description: The email of the guest.
 *         Phone:
 *           type: string
 *           description: The phone number of the guest.
 */

/**
 * @swagger
 * /api/guests:
 *   get:
 *     summary: Retrieve a list of guests.
 *     description: Retrieve a list of guests.
 *     responses:
 *       200:
 *         description: A list of guests.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Guest'
 */

/**
 * @swagger
 * /api/guests:
 *   post:
 *     summary: Create a new guest.
 *     description: Create a new guest.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Guest'
 *     responses:
 *       201:
 *         description: The created guest.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Guest'
 */

/**
 * @swagger
 * /api/guests/{id}:
 *   put:
 *     summary: Update a guest by ID.
 *     description: Update a guest by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the guest to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Guest'
 *     responses:
 *       200:
 *         description: The updated guest.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Guest'
 *       404:
 *         description: Guest not found.
 */

/**
 * @swagger
 * /api/guests/{id}:
 *   delete:
 *     summary: Delete a guest by ID.
 *     description: Delete a guest by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the guest to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The guest was successfully deleted.
 *       404:
 *         description: Guest not found.
 */

const express = require('express');
const router = express.Router();
const guestController = require('../controllers/guestController');

router.get('/guests', guestController.getAllGuests);
router.post('/guests', guestController.createGuest);
router.put('/guests/:id', guestController.updateGuest);
router.delete('/guests/:id', guestController.deleteGuest);

module.exports = router;
