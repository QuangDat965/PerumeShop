const express = require('express');
const app = express();
const sequelize = require('./config/databasemssql');
const userController = require('./application/controllers/userController');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
//#region Đăng kí controller
app.use('/api', userController);
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

