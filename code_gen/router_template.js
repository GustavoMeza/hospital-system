module.exports = (apiServices) => {
    var router = require('express').Router();

    // api
    @table{
    // ^name
    router.post('/api/^name/', apiServices.^name.create);
    router.get('/api/^name/', apiServices.^name.readAll);
    router.get('/api/^name/:id', apiServices.^name.readById);
    router.put('/api/^name/', apiServices.^name.update);
    router.delete('/api/^name/:id', apiServices.^name.delete);}

    return router;
};
