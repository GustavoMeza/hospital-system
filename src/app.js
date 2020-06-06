var config = require('./config')();
var connector = require('./connector')(config);
var dataServices = require('./data')(connector);
var persistentServices = require('./persistent')();
var businessServices = require('./business')(dataServices, persistentServices);
var authServices = require('./auth')(businessServices, config);
var authMiddleware = require('./auth/middleware')(authServices);
var apis = require('./apis/')(businessServices);
var express = require('express');

var app = express();

app.use(express.json());

for(var apiId in apis) {
    var api = apis[apiId];
    if(api.auth==null) app[api.method](api.route, api.controller);
    else app[api.method](api.route, authMiddleware, api.auth, api.controller);
}

var port = 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
