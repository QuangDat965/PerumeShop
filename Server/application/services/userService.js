const Users = require('../models/user');

const UserService = {

  async getUsers(req, res) {
    try {
      const users = await Users.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async FinbyId(req, res) {
    try {
      const userFind = await Users.findByPk(req.body.Id);
    if (!userFind) {
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    }
    res.json(userFind);
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  },

  async UpdateUser(req, res) {
    try {
      const updatedUser = await Users.findByPk(req.body.Id);
    if (!updatedUser) {
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    }
    await updatedUser.update(req.body);
    res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  },

  async DeleteUser(req, res) {
    try {
      const deleteUser = await Users.findByPk(req.body.Id);
    if (!deleteUser) {
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    }
    await deleteUser.destroy();
    res.json(deleteUser);
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  },

  async AddUser(req, res) {
    try {
      const users = await Users.create({...req.body});
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  },
};

module.exports = UserService;
