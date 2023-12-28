// controllers/userController.js
const userService = require('../services/userService');

const UserController = {
  async getUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // Các phương thức xử lý yêu cầu khác từ routes
};

module.exports = UserController;
