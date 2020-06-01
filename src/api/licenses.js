module.exports = (dataServices) => ({
    create : async (req,res) => {
        var obj = req.body;
        var [rows, fields] = await dataServices.licenses.create(obj, 1);
        res.send(rows);
    },
    readAll : async (req,res) => {
        var [rows, fields] = await dataServices.licenses.readAll();
        res.send(rows);
    },
    readById : async (req,res) => {
        var id = req.params.id;
        var [rows, fields] = await dataServices.licenses.readById(id);
        res.send(rows);
    },
    update : async (req,res) => {
        var obj = req.body;
        var [rows, fields] = await dataServices.licenses.update(obj, 1);
        res.send(rows);
    },
    delete : async (req,res) => {
        var id = req.params.id;
        var [rows, fields] = await dataServices.licenses.delete(id, 1);
        res.send(rows);
    },
});
