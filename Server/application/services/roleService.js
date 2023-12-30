const Roles = require('../models/role');

const UserService = {

  async getRoles(req, res) {
    try {
      const roles = await Roles.findAll();
      res.json(roles);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  async AddRole(req, res) {
    try {
      const role = await Roles.create({...req.body});
      res.json(role);
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  },

  
};

module.exports = UserService;
