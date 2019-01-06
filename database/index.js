const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'toor',
  database: 'categories_module'
});

connection.connect((err) => {
  if (err) {
    console.log(`ERROR: ${err.message}`);
  } else {
    console.log('database connected');
  }
});

module.exports.connection = connection;