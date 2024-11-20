const db = require('./config/database');
const User = require('./models/User');
const Service = require('./models/services');

const seedData = async () => {
  try {
    await db.authenticate();
    console.log('Banco de Dados conectado...');

    await db.sync({ alter: true }); // ou { force: true }
    console.log('Tabelas sincronizadas com sucesso!');

    // Inserção de dados
    await User.create({ name: 'Admin', email: 'admin@barber.com', password: 'admin', role: 'barbeiro' });

    await Service.bulkCreate([
      { name: 'Corte de cabelo', duration: 30, price: 35.00 },
      { name: 'Barba', duration: 20, price: 20.00 },
      { name: 'Corte e barba', duration: 50, price: 50.00 },
    ]);

    console.log('Dados iniciais inseridos com sucesso!');
  } catch (err) {
    console.error('Erro ao inserir dados iniciais:', err);
  } finally {
    process.exit(); // Encerra o script após executar
  }
};

seedData();
