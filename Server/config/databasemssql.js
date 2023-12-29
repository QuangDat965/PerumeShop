// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('perfumedb', 'sa', 'dat12345678', {
  host: 'localhost',
  dialect: 'mssql',
  port: 49838,
  dialectOptions: {
    options: {
      encrypt: true 
    }
  }
});

module.exports = sequelize;
