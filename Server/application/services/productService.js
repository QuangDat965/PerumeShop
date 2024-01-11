const Products = require('../models/product');

const ProductService = {

  async getProducts(req, res) {
    try {
      const products = await Products.findAll();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async FindbyId(req, res) {
    try {
      const productFind = await Products.findByPk(req.body.Id);
    if (!productFind) {
      return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
    }
    res.json(productFind);
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  },

  async AddProduct(req, res) {
    try {
      const products = await Products.create(req.body);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  },

  async UpdateProduct(req, res) {
    try {
      const updatedProduct = await Products.findByPk(req.body.Id);
    if (!updateProduct) {
      return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
    }
    await updateProduct.update(req.body);
    res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  },

  async DeleteProduct(req, res) {
    try {
      const deleteProduct = await Products.findByPk(req.body.Id);
    if (!deleteProduct) {
      return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
    }
    await deleteProduct.destroy();
    res.json(deleteProduct);
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  },
  
};

module.exports = ProductService;
