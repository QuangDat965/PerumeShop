// models/user.js
const { DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../../config/databasemssql');

const Order = sequelize.define('Orders', {
  IdOrder: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Count: DataTypes.INTEGER,
  IdClient: DataTypes.INTEGER,
  Amount: DataTypes.INTEGER,
  Date: DataTypes.DATE,
  Total: DataTypes.INTEGER,
  Trangthai: DataTypes.TEXT
}, {
  tableName:'Orders',
  timestamps: false 
});

// Export model để sử dụng ở nơi khác trong ứng dụng
module.exports = Orders;
