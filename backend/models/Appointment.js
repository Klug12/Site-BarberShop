//Compromissos

const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./User');
const Service = require('./Service');

const Appointment = db.define('Appointment', {
  date: { type: DataTypes.DATE, allowNull: false },
  status: {
    type: DataTypes.ENUM('agendado', 'cancelado', 'concluído'),
    defaultValue: 'agendado',
  },
});

// Relacionamentos
Appointment.belongsTo(User, { as: 'client', foreignKey: { name: 'clientId', allowNull: false } });
Appointment.belongsTo(User, { as: 'barber', foreignKey: { name: 'barberId', allowNull: false } });
Appointment.belongsTo(Service, { foreignKey: { name: 'serviceId', allowNull: false } });

module.exports = Appointment;
