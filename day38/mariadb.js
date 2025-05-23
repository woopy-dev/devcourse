const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 33066,
  user: 'root',
  password: 'root',
  database: 'Bookshop',
  dateStrings: true
});

module.exports = connection;