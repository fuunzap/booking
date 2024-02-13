const { Sequelize } = require('sequelize');

const connection  = new Sequelize('hotel_booking', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false, 
  },
});

module.exports = connection ;