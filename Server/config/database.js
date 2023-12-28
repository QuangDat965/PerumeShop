// config/database.js
const sql = require('mssql');

let config = {
  server: 'localhost',
    database: 'testdb',
    port:49838,
    user: 'sa',
    password: 'dat12345678',
    trustServerCertificate:true,
    options: {
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1',
            trustServerCertificate: true,
        }
    }  
}
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log('SQL Server connected');
    return pool;
  })
  .catch((err) => {
    console.error('SQL Server connection failed:', err);
  });

module.exports = poolPromise;
