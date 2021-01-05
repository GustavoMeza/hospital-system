const { Connection } = require('mysql2');
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

    var pool = mysql.createPool(mysqlConfig);

    var connection = {
        execute: async (...args) => {
            var connection = await pool.getConnection();
            return connection.execute(...args);
        },
    };

    return connection;
}
