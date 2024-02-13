/**
 * @swagger
 * components:
 *   schemas:
 *     Room:
 *       type: object
 *       properties:
 *         RoomID:
 *           type: integer
 *           description: The auto-generated id of the room.
 *         RoomNumber:
 *           type: string
 *           description: The room number.
 *         RoomType:
 *           type: string
 *           description: The type of the room.
 *         Description:
 *           type: string
 *           description: Description of the room.
 *         Price:
 *           type: number
 *           description: The price of the room per night.
 */

/**
 * @swagger
 * /api/rooms:
 *   get:
 *     summary: Retrieve a list of rooms.
 *     description: Retrieve a list of rooms.
 *     responses:
 *       200:
 *         description: A list of rooms.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Room'
 */

/**
 * @swagger
 * /api/rooms:
 *   post:
 *     summary: Create a new room.
 *     description: Create a new room.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Room'
 *     responses:
 *       201:
 *         description: The created room.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Room'
 */

/**
 * @swagger
 * /api/rooms/{id}:
 *   put:
 *     summary: Update a room by ID.
 *     description: Update a room by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the room to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Room'
 *     responses:
 *       200:
 *         description: The updated room.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Room'
 *       404:
 *         description: Room not found.
 */

/**
 * @swagger
 * /api/rooms/{id}:
 *   delete:
 *     summary: Delete a room by ID.
 *     description: Delete a room by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the room to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The room was successfully deleted.
 *       404:
 *         description: Room not found.
 */

const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.get('/rooms', roomController.getAllRooms);
router.post('/rooms', roomController.createRoom);
router.put('/rooms/:id', roomController.updateRoom);
router.delete('/rooms/:id', roomController.deleteRoom);

module.exports = router;
