var mysql = require('mysql2/promise')

// Returns a database connection pool
// Dependencies:
// - config: Database configuration object
module.exports = (config) => {

    var poolConfig = {
        host: config.HOST,
        user: config.USER,
        password: config.PASS,
        database: config.NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    }

    connectionPool = mysql.createPool(poolConfig);

    return connectionPool;
}
