const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  database: 'categories_module'
});

connection.connect((err) => {
  if (err) {
    process.env['msg'] = 'Unable to connect to RDS - ' + err;/* console.log(`ERROR: ${err.message}`); */
  } else {
    process.env['msg'] = 'Success! Connected to RDS via ' + process.env.RDS_HOSTNAME;/* console.log('database connected'); */
  }
});

module.exports.connection = connection;


// host: 'localhost',
//   user: 'root',
//     password: 'toor',
//       database: 'categories_module'
