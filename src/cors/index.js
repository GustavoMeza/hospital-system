var cors = require('cors');

var corsOptions = {
    origin: new RegExp('^https?://localhost'),
};

let corsMiddleware = cors(corsOptions);

module.exports = () => corsMiddleware;
