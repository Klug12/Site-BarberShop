//Restrições da Agenda

const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./User');

const BlockedTime = db.define('BlockedTime', {
  date: { type: DataTypes.DATE, allowNull: false },
  reason: { type: DataTypes.STRING, allowNull: true },
});

BlockedTime.belongsTo(User, { as: 'barber', foreignKey: 'barberId' });

module.exports = BlockedTime;
