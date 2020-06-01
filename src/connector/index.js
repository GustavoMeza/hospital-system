var mysql = require('mysql2/promise')

var dbconfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
}

var poolConfig = {
    ...dbconfig,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
}

connectionPool = mysql.createPool(poolConfig);

module.exports = () => connectionPool;
