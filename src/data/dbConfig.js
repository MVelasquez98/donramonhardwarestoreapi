// data/dbConfig.js
const mysql = require('mysql2');

const dbConfig = {
  host: 'roundhouse.proxy.rlwy.net',
  user: 'root',
  password:'slEOfjcicfHzHiTqDkammAbGPaSPUbQQ',
  database: 'railway',
  port:42313
};

const pool = mysql.createConnection(dbConfig);

module.exports = pool;