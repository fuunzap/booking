const Booking = require('../models/booking');

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Ошибка при получении списка бронирований:', error);
    res.status(500).json({ error: 'Ошибка при получении списка бронирований' });
  }
};

const createBooking = async (req, res) => {
  try {
    const newBooking = await Booking.create(req.body);
    res.status(201).json(newBooking);
  } catch (error) {
    console.error('Ошибка при создании бронирования:', error);
    res.status(500).json({ error: 'Ошибка при создании бронирования' });
  }
};

const updateBooking = async (req, res) => {
  const bookingId = req.params.id;
  try {
    const [updatedRowsCount] = await Booking.update(req.body, {
      where: { BookingID: bookingId },
    });
    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: 'Бронирование не найдено' });
    }
    res.status(200).json({ message: 'Бронирование успешно обновлено' });
  } catch (error) {
    console.error('Ошибка при обновлении бронирования:', error);
    res.status(500).json({ error: 'Ошибка при обновлении бронирования' });
  }
};

const deleteBooking = async (req, res) => {
  const bookingId = req.params.id;
  try {
    const deletedRowCount = await Booking.destroy({
      where: { BookingID: bookingId },
    });
    if (deletedRowCount === 0) {
      return res.status(404).json({ error: 'Бронирование не найдено' });
    }
    res.status(200).json({ message: 'Бронирование успешно удалено' });
  } catch (error) {
    console.error('Ошибка при удалении бронирования:', error);
    res.status(500).json({ error: 'Ошибка при удалении бронирования' });
  }
};

module.exports = {
  getAllBookings,
  createBooking,
  updateBooking,
  deleteBooking,
};
