module.exports = (dataServices) => ({
    readAll : async (req,res) => {
        var [rows, fields] = await dataServices.users.readAll();
        res.send(rows);
    },
});
