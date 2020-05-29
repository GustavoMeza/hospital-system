var connector = require('./connector')();
var dataServices = require('./data/services')(connector);
var apiServices = require('./api/services')(dataServices);
var router = require('./router')(apiServices);
var app = require('express')();

(async () => {
    for(var key in dataServices) {
        console.log(key)
        var [row,fields] = await dataServices[key].readAll();
        console.log(row);
    }
})();

app.use('/', router);

var port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
