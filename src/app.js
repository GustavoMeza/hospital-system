var connector = require('./connector')();
var dataServices = require('./data/services')(connector);
var apiServices = require('./api/services')(dataServices);
var router = require('./router')(apiServices);
var app = require('express')();

app.use('/', router);

var port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
