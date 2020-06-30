var config = require('./config')();
var connector = require('./connector')(config);
var dataServices = require('./data')(connector);
var persistentServices = require('./persistent')();
var authServices = require('./auth')(persistentServices, dataServices,  config);
var authMiddleware = require('./auth/middleware')(authServices);
var apis = require('./apis')(persistentServices, dataServices);
var router = require('./router')(apis);
var express = require('express');

var app = express();

app.use(express.json());
app.use('/api/', authMiddleware);
app.use(router);

app.post('/login', async (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    try {
        var user = await authServices.getUser(username, password);
        var token = await authServices.createJwt(user.id);
        res.json(token).send();
    } catch (ex) {
        res.status(401).send("Invalid username-password");
    }
});

var port = 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
