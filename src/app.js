// Builds an application with the given configuration
// Manages the dependencies between modules
// Dependencies:
// - config: The configuration object
module.exports = (config) => {
    // CORS middleware
    var cors = require('./cors')();

    // Database connection pool
    var connector = require('./connector')(config.DB);
    // Raw data access services
    var dataServices = require('./data')(connector);
    // Persistent data access services
    var persistentServices = require('./persistent')(dataServices);
    // API controllers to handle persistent CRUD operations
    var dataApis = require('./apis')(persistentServices);
    
    // Auth services
    var authServices = require('./auth/services')(persistentServices, config.AUTH);
    // API controllers to handle auth
    var authApis = require('./auth/api')(authServices);
    
    // App with the routing flow set up
    var app = require('./router')(cors, dataApis, authApis);
    
    return app;
};
