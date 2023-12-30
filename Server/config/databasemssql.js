// db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const dbname = process.env.DN_NAME;
const dbhost = process.env.DB_HOST;
const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASSWOED;


const sequelize = new Sequelize(dbname, dbuser, dbpassword, {
  host: dbhost,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true 
    }
  }
});

module.exports = sequelize;

