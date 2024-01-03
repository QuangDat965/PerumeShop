const sql = require('mssql');
const config = {
    server: 'localhost',
    database: 'perfum',
    user: 'sa',
    password: '16122001',
    trustServerCertificate:true,
    options: {
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1',
            trustServerCertificate: true,
        }
    }   
  };
  

// connect to your database
sql.connect(config, function (err) {

    if (err) console.log(err);
    else {
        console.log('Connected to SQL Server');
    }

});  
    