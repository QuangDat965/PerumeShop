const express = require('express');
const app = express();
const sequelize = require('./config/databasemssql');
const userController = require('./application/controllers/userController');
const roleController = require('./application/controllers/roleController');
const productController = require('./application/controllers/productController');
const authController = require('./application/controllers/authController');
const categoryController = require('./application/controllers/categoryController');
const cors = require('cors');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
//#region Đăng kí controller
//REST FULL API
app.use('/api', userController);
app.use('/api', roleController);
app.use('/api', productController);
app.use('/api', categoryController);
app.use('/api', authController);

//#endregion

//#region  Kiểm tra kết nối
sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database by squelize');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
//#endregion

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

