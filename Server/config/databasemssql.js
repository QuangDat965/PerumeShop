// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('perfum', 'sa', '16122001', {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true 
    }
  }
});

module.exports = sequelize;

