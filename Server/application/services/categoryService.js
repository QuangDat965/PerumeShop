

const Categories = require('../models/category');


const catgoryService = {


    async GetAll(req, res) {
        try {
            const rs = await Categories.findAll();
            res.json(rs)
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async AddCatg(req, res) {
        try {
            const rs = await Categories.create(req.body);
            res.json(rs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};

module.exports = catgoryService;
