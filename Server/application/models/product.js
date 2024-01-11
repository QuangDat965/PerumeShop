// models/user.js
const { DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../../config/databasemssql');

const Products = sequelize.define('Products', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: DataTypes.TEXT,
  Description: DataTypes.TEXT,
  Original: DataTypes.TEXT,
  OriginPrice: DataTypes.NUMBER(18,2),
  Price: DataTypes.NUMBER(18,2),
  Amount: DataTypes.INTEGER,
  IdSize: DataTypes.INTEGER,
  IdCatg: DataTypes.INTEGER,
  Sex: DataTypes.TEXT,
  Total: DataTypes.INTEGER,
  Rates: DataTypes.INTEGER,
  ImageSr: DataTypes.TEXT,
}, {
  tableName:'Products',
  timestamps: false 
});

// Export model để sử dụng ở nơi khác trong ứng dụng
module.exports = Products;
