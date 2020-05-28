var Sequelize = require('sequelize');
var finale = require('finale-rest');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
 
var sequelize = new Sequelize(
    'hospital_system',
    'gustavomg',
    '',
    {
        host: 'localhost',
        dialect:'mysql',
    },
);
var Permissions = sequelize.import('./models/permissions');
var resource_types = Permissions.rawAttributes.resource.values;
 
// Initialize server
var server, app;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
server = http.createServer(app);

 
// Initialize finale
finale.initialize({
  app: app,
  sequelize: sequelize
});

// Not cool at all, but will do for now
// Creates a rest api entry for each model
var resources = {}
for(var key in resource_types) {
    var resource_type=resource_types[key]
    resources[resource_type] = finale.resource({
        model: sequelize.import('./models/'+resource_type),
        endpoints: ['/api/'+resource_type]
    });
}

server.listen(function() {
    var host = server.address().address,
        port = server.address().port;
 
    console.log('listening at http://%s:%s', host, port);
});

