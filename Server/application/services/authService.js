const userService = require('./userService');
const Users = require('../models/user')
const Roles = require('../models/role')
const { Op } = require('sequelize');


const AuthService = {


  async Login(req, res) {
    try {
      const body = req.body;
      const rs = await Users.findOne({
        where: {
            Username: {
                [Op.eq]:body.Username
            },
            Password: {
                [Op.eq]:body.Password
            }
        }
     });
     if(rs==null) {
        res.json({code:-1});
     }
     else {
        const role = await Roles.findByPk(rs.RoleId);
        const respon = {
            code:0,
            role:role.Name,
            user:rs
        }
        res.json(respon);
     }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async Register(req, res) {
    try {
      const body = req.body;
      const rs = await Users.findOne({
        where: {
            Username: {
                [Op.eq]:body.Username
            },
            Password: {
                [Op.eq]:body.Password
            },
            RoleId:{
              [Op.eq]:body.RoleId
          },
          }
     });
     if(rs!=null) {
      return res.status(404).json({ message:' Người dùng đã tồn tại' })
     }
     else {
        const addUser = await userService.AddUser(req,res);
        res.json({code:0})
     }
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  },
};

module.exports = AuthService;
