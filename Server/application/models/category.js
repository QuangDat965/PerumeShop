// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/databasemssql');

const Categories = sequelize.define('Catg', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
 Name:String,
}, {
  tableName:'Categories',
  timestamps: false 
});

// Export model để sử dụng ở nơi khác trong ứng dụng
module.exports = Categories;
