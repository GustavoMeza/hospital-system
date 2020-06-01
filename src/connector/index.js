var mysql = require('mysql2/promise')

module.exports = (config) => {

    var poolConfig = {
        host: config.DB_HOST,
        user: config.DB_USER,
        password: config.DB_PASS,
        database: config.DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    }

    connectionPool = mysql.createPool(poolConfig);
    return connectionPool;
}
