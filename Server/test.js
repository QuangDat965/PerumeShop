require('dotenv').config();

// Sử dụng các biến môi trường đã được load
const dbname = process.env.DN_NAME;
const dbhost = process.env.DB_HOST;
const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASSWOED; // Chú ý đã sửa chính tả ở đây

console.log(dbname);
console.log(dbhost);
console.log(dbuser);
console.log(dbpassword);