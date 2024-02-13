const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Booking = sequelize.define('Booking', {
  BookingID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  RoomID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  GuestID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  CheckinDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  CheckoutDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Status: {
    type: DataTypes.ENUM('confirm', 'pending', 'canceled'),
    allowNull: false,
  },
}, {
  tableName: 'Bookings',
  timestamps: false
});

module.exports = Booking;
