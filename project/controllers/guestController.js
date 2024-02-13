const Guest = require('../models/guest');

const getAllGuests = async (req, res) => {
  try {
    const guests = await Guest.findAll();
    res.status(200).json(guests);
  } catch (error) {
    console.error('Ошибка при получении списка гостей:', error);
    res.status(500).json({ error: 'Ошибка при получении списка гостей' });
  }
};

const createGuest = async (req, res) => {
  try {
    const newGuest = await Guest.create(req.body);
    res.status(201).json(newGuest);
  } catch (error) {
    console.error('Ошибка при создании гостя:', error);
    res.status(500).json({ error: 'Ошибка при создании гостя' });
  }
};

const updateGuest = async (req, res) => {
  const guestId = req.params.id;
  try {
    const [updatedRowsCount] = await Guest.update(req.body, {
      where: { id: guestId },
    });
    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: 'Гость не найден' });
    }
    res.status(200).json({ message: 'Гость успешно обновлен' });
  } catch (error) {
    console.error('Ошибка при обновлении гостя:', error);
    res.status(500).json({ error: 'Ошибка при обновлении гостя' });
  }
};

const deleteGuest = async (req, res) => {
  const guestId = req.params.id;
  try {
    const deletedRowCount = await Guest.destroy({
      where: { id: guestId },
    });
    if (deletedRowCount === 0) {
      return res.status(404).json({ error: 'Гость не найден' });
    }
    res.status(200).json({ message: 'Гость успешно удален' });
  } catch (error) {
    console.error('Ошибка при удалении гостя:', error);
    res.status(500).json({ error: 'Ошибка при удалении гостя' });
  }
};

module.exports = {
  getAllGuests,
  createGuest,
  updateGuest,
  deleteGuest,
};
