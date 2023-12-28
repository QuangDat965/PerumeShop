// services/userService.js
const poolPromise = require('../config/database');

const UserService = {
  async getAllUsers() {
    try {
      const pool = await poolPromise;
      const result = await pool.request().query('SELECT * FROM Users');
      return result.recordset;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  // Các phương thức xử lý logic khác liên quan đến người dùng
};

module.exports = UserService;
