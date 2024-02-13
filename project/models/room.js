const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Room = sequelize.define('Room', {
  RoomID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  RoomNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  RoomType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'Room',
  timestamps: false
});

module.exports = Room;
