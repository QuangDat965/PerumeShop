// models/user.js
const { DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../../config/databasemssql');

const OrderDetails = sequelize.define('OrderDetails', {
  IdOrder: DataTypes.INTEGER,
  NameProduct: DataTypes.TEXT,
  IdProduct: DataTypes.INTEGER,
  Description: DataTypes.TEXT,
  Amount: DataTypes.INTEGER,
  Total: DataTypes.INTEGER,
  ImageSr: DataTypes.TEXT,
}, {
  tableName:'OrderDetails',
  timestamps: false 
});

// Export model để sử dụng ở nơi khác trong ứng dụng
module.exports = OrderDetails;
