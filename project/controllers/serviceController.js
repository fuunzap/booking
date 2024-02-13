const Service = require('../models/service');

const getAllServices = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.status(200).json(services);
  } catch (error) {
    console.error('Ошибка при получении списка услуг:', error);
    res.status(500).json({ error: 'Ошибка при получении списка услуг' });
  }
};

const createService = async (req, res) => {
  try {
    const newService = await Service.create(req.body);
    res.status(201).json(newService);
  } catch (error) {
    console.error('Ошибка при создании услуги:', error);
    res.status(500).json({ error: 'Ошибка при создании услуги' });
  }
};

const updateService = async (req, res) => {
  const serviceId = req.params.id;
  try {
    const [updatedRowsCount] = await Service.update(req.body, {
      where: { id: serviceId },
    });
    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: 'Услуга не найдена' });
    }
    res.status(200).json({ message: 'Услуга успешно обновлена' });
  } catch (error) {
    console.error('Ошибка при обновлении услуги:', error);
    res.status(500).json({ error: 'Ошибка при обновлении услуги' });
  }
};

const deleteService = async (req, res) => {
  const serviceId = req.params.id;
  try {
    const deletedRowCount = await Service.destroy({
      where: { id: serviceId },
    });
    if (deletedRowCount === 0) {
      return res.status(404).json({ error: 'Услуга не найдена' });
    }
    res.status(200).json({ message: 'Услуга успешно удалена' });
  } catch (error) {
    console.error('Ошибка при удалении услуги:', error);
    res.status(500).json({ error: 'Ошибка при удалении услуги' });
  }
};

module.exports = {
  getAllServices,
  createService,
  updateService,
  deleteService,
};
