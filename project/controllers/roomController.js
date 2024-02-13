const Room = require('../models/room');

const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.status(200).json(rooms);
  } catch (error) {
    console.error('Ошибка при получении списка комнат:', error);
    res.status(500).json({ error: 'Ошибка при получении списка комнат' });
  }
};

const createRoom = async (req, res) => {
  try {
    const newRoom = await Room.create(req.body);
    res.status(201).json(newRoom);
  } catch (error) {
    console.error('Ошибка при создании комнаты:', error);
    res.status(500).json({ error: 'Ошибка при создании комнаты' });
  }
};

const updateRoom = async (req, res) => {
  const roomId = req.params.id;
  try {
    const [updatedRowsCount] = await Room.update(req.body, {
      where: { id: roomId },
    });
    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: 'Комната не найдена' });
    }
    res.status(200).json({ message: 'Комната успешно обновлена' });
  } catch (error) {
    console.error('Ошибка при обновлении Комнаты:', error);
    res.status(500).json({ error: 'Ошибка при обновлении комнаты' });
  }
};

const deleteRoom = async (req, res) => {
  const roomId = req.params.id;
  try {
    const deletedRowCount = await Room.destroy({
      where: { id: roomId },
    });
    if (deletedRowCount === 0) {
      return res.status(404).json({ error: 'Комната не найдена' });
    }
    res.status(200).json({ message: 'Комната успешно удалена' });
  } catch (error) {
    console.error('Ошибка при удалении Комнаты:', error);
    res.status(500).json({ error: 'Ошибка при удалении Комнаты' });
  }
};

module.exports = {
  getAllRooms,
  createRoom,
  updateRoom,
  deleteRoom,
};