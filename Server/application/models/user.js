// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/databasemssql');

const Users = sequelize.define('User', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  FirstName :String,
  LastName :String,
  Email :String,
  Username :String,
  Password :String,
  NumberPhone :String,
  Address :String,
  Image :String,
  ShopId :Number,
  RoleId :Number,
}, {
  tableName:'Users',
  timestamps: false 
});

// Export model để sử dụng ở nơi khác trong ứng dụng
module.exports = Users;
