const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Service = db.define('Service', {
  name: { type: DataTypes.STRING, allowNull: false },
  duration: { type: DataTypes.INTEGER, allowNull: false }, // Duração em minutos
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
});

module.exports = Service;
