require('dotenv').config();
var connector = require('./connector')();
var dataServices = require('./data')(connector);
var persistentServices = require('./persistent')();
var businessServices = require('./business')(dataServices, persistentServices);
var authenticationServices = require('./authentication')(businessServices);

(async () => {
    var isGood = await authenticationServices.validate('okra', '1234');
    console.log(isGood);
})();


/*
var apiServices = require('./api/')(dataServices, persistentServices);
var router = require('./router')(apiServices);
var express = require('express');

var app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use('/', router);

var port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
*/
