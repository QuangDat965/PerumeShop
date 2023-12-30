// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/databasemssql');

const Roles = sequelize.define('Roles', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name : String
}, {
  tableName:'Roles',
  timestamps: false 
});

// Export model để sử dụng ở nơi khác trong ứng dụng
module.exports = Roles;
