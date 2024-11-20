//Usuários

const { DataTypes } = require('sequelize');
const db = require('../config/database');

const User = db.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: true },
  role: { type: DataTypes.ENUM('cliente', 'barbeiro'), allowNull: false },
});

module.exports = User;
