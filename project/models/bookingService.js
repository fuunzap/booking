const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BookingService = sequelize.define('BookingService', {
  BookingServiceID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  BookingID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ServiceID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'BookingServices',
  timestamps: false
});

module.exports = BookingService;
