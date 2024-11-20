const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
require('dotenv').config();

// Importar os modelos
const User = require('./models/User');
const Service = require('./models/Service');
const Appointment = require('./models/Appointment');
const BlockedTime = require('./models/BlockedTime');

// Inicializar o express
const app = express();
app.use(bodyParser.json());

// Conectar ao banco de dados
db.authenticate()
  .then(() => console.log('Banco de Dados conectado...'))
  .catch(err => console.log('Erro ao conectar ao banco de dados:', err));

// Sincronizar os modelos com o banco de dados
db.sync({ alter: true })  // ou { force: true } para recriar as tabelas
  .then(() => console.log('Tabelas sincronizadas com sucesso!'))
  .catch(err => console.log('Erro ao sincronizar tabelas:', err));

// Iniciar o servidor
app.listen(3001, () => console.log('Servidor rodando na porta 3001'));


