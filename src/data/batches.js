module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO batches (code, input, drug, expires, quantity, lab) VALUES (?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.code, obj.input, obj.drug, obj.expires, obj.quantity, obj.lab];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM batches;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM batches WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE batches SET code = ?, input = ?, drug = ?, expires = ?, quantity = ?, lab = ? WHERE id = ?";
        var escapedValues = [obj.code, obj.input, obj.drug, obj.expires, obj.quantity, obj.lab, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE batches SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
