// Entry point of the backend

// Get the configuration object
var config = require('./config')();

// Set up the app
var app = require('./app')(config);

// Set up the port
var port = config.PORT;

// Run!
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});