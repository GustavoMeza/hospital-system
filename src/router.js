module.exports = (apiServices) => {
    var router = require('express').Router();

    router.get('/api/users/', apiServices.users.readAll)

    return router;
};
