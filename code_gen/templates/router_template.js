var express = require('express');

// Configures the routing flow of the application
// Dependencies:
// - dataApis: The API controllers for performing CRUD operations
// - authApis: The API controllers for performing Auth operations
module.exports = (cors, dataApis, authApis) => {
    app = express();

    // Parse json objects
    app.use(express.json());

    // CORS
    app.use(cors);
    
    //Auth API

    // Log in end point
    app.post('/login/', authApis.login);

    // Require and process authentication 
    app.use('/api/', authApis.middleware);

    // Data API
    @table{
    // ^name
    app.post('/api/^name/', dataApis.^name.create);
    app.get('/api/^name/', dataApis.^name.readAll);
    app.get('/api/^name/:id', dataApis.^name.readById);
    app.put('/api/^name/', dataApis.^name.update);
    app.delete('/api/^name/:id', dataApis.^name.delete);}

    return app;
};
