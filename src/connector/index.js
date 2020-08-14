var mysql = require('mysql2/promise')

// Returns a database connection pool
// Dependencies:
// - config: Database configuration object
module.exports = (config) => {

    var mysqlConfig = {
        host: config.HOST,
        user: config.USER,
        password: config.PASS,
        database: config.NAME,
    }

    var connection = mysql.createConnection(mysqlConfig);

    var pool = {
        execute: async (...args) => (await connection).execute(...args),
    };

    return pool;
}
