const BookingService = require('../models/bookingService');

const getAllBookingServices = async (req, res) => {
  try {
    const bookingServices = await BookingService.findAll();
    res.status(200).json(bookingServices);
  } catch (error) {
    console.error('Ошибка при получении списка услуг бронирования:', error);
    res.status(500).json({ error: 'Ошибка при получении списка услуг бронирования' });
  }
};

const createBookingService = async (req, res) => {
  try {
    const newBookingService = await BookingService.create(req.body);
    res.status(201).json(newBookingService);
  } catch (error) {
    console.error('Ошибка при создании услуги бронирования:', error);
    res.status(500).json({ error: 'Ошибка при создании услуги бронирования' });
  }
};

const updateBookingService = async (req, res) => {
  const bookingServiceId = req.params.id;
  try {
    const [updatedRowsCount] = await BookingService.update(req.body, {
      where: { id: bookingServiceId },
    });
    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: 'Услуга бронирования не найдена' });
    }
    res.status(200).json({ message: 'Услуга бронирования успешно обновлена' });
  } catch (error) {
    console.error('Ошибка при обновлении услуги бронирования:', error);
    res.status(500).json({ error: 'Ошибка при обновлении услуги бронирования' });
  }
};

const deleteBookingService = async (req, res) => {
  const bookingServiceId = req.params.id;
  try {
    const deletedRowCount = await BookingService.destroy({
      where: { id: bookingServiceId },
    });
    if (deletedRowCount === 0) {
      return res.status(404).json({ error: 'Услуга бронирования не найдена' });
    }
    res.status(200).json({ message: 'Услуга бронирования успешно удалена' });
  } catch (error) {
    console.error('Ошибка при удалении услуги бронирования:', error);
    res.status(500).json({ error: 'Ошибка при удалении услуги бронирования' });
  }
};

module.exports = {
  getAllBookingServices,
  createBookingService,
  updateBookingService,
  deleteBookingService,
};
