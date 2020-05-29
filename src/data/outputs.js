module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO outputs (sign, batch, quantity, comment, type) VALUES (?, ?, ?, ?, ?);";
        var escapedValues = [obj.sign, obj.batch, obj.quantity, obj.comment, obj.type];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM outputs;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM outputs WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE SET sign = ?, batch = ?, quantity = ?, comment = ?, type = ? WHERE id = ?";
        var escapedValues = [obj.sign, obj.batch, obj.quantity, obj.comment, obj.type, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
