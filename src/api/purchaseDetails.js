module.exports = (dataServices) => ({
    create : async (req,res) => {
        var obj = req.body;
        var [rows, fields] = await dataServices.purchaseDetails.create(obj);
        res.send(rows);
    },
    readAll : async (req,res) => {
        var [rows, fields] = await dataServices.purchaseDetails.readAll();
        res.send(rows);
    },
    readById : async (req,res) => {
        var id = req.params.id;
        var [rows, fields] = await dataServices.purchaseDetails.readById(id);
        res.send(rows);
    },
    update : async (req,res) => {
        var obj = req.body;
        var [rows, fields] = await dataServices.purchaseDetails.update(obj);
        res.send(rows);
    },
    delete : async (req,res) => {
        var id = req.params.id;
        var [rows, fields] = await dataServices.purchaseDetails.delete(id);
        res.send(rows);
    },
});
