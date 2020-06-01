module.exports = (dataServices) => ({
    create : async (req,res) => {
        var obj = req.body;
        var [rows, fields] = await dataServices.fillBatches.create(obj, 1);
        res.send(rows);
    },
    readAll : async (req,res) => {
        var [rows, fields] = await dataServices.fillBatches.readAll();
        res.send(rows);
    },
    readById : async (req,res) => {
        var id = req.params.id;
        var [rows, fields] = await dataServices.fillBatches.readById(id);
        res.send(rows);
    },
    update : async (req,res) => {
        var obj = req.body;
        var [rows, fields] = await dataServices.fillBatches.update(obj, 1);
        res.send(rows);
    },
    delete : async (req,res) => {
        var id = req.params.id;
        var [rows, fields] = await dataServices.fillBatches.delete(id, 1);
        res.send(rows);
    },
});
