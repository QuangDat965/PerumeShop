const sql = require('mssql');
const config = {
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
  };
  

// connect to your database
sql.connect(config, function (err) {

    if (err) console.log(err);
    else {
        console.log('Connected to SQL Server');
    }

});  
    