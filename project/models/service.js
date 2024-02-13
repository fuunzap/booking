const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Service = sequelize.define('Service', {
  ServiceID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ServiceName: {
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
  tableName: 'Service',
  timestamps: false
});

module.exports = Service;
