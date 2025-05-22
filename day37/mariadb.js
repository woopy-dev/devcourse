const mysql = require('mysql2');

const connection = async () => {
  const conn = await mysql.createConnection({
    host: '127.0.0.1',
    port: 33066,
    user: 'root',
    password: 'root',
    database: 'Bookshop',
    dateStrings: true
  });

  return conn;
};

module.exports = connection;