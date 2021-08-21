require('dotenv').config();
const mysql = require('mysql2/promise');

const connectToDB = () => {
  const connection = mysql.createConnection(
    // check for production cloud db url or default to local config
    process.env.JAWSDB_URL || {
      host: 'localhost',
      user: process.env.MY_USER,
      password: process.env.MY_PWD,
      database: 'any_db',
    }
  );
  return connection;
};

const conn = connectToDB();

module.exports = conn;
