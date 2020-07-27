require('dotenv').config();

// returns the configuration object
module.exports = () => ({
    DB: {
        // Host in which the database is running
        HOST: process.env.DB_HOST,
        // Database name
        NAME: process.env.DB_NAME,
        // Username to access the database
        USER: process.env.DB_USER,
        // Password for that username
        PASS: process.env.DB_PASS,
    },
    AUTH: {
        // Secret used to sign the JWT
        SECRET: process.env.AUTH_SECRET,
    },
    // Port configuration
    PORT: 3000,
});
