const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  user: 'user',
  password: 'password',
  database: 'database'
});

module.exports.dbConnection ==dbConnection;