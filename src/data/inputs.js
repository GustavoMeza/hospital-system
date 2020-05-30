module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO inputs (supplier, address, comments, type) VALUES (?, ?, ?, ?);";
        var escapedValues = [obj.supplier, obj.address, obj.comments, obj.type];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM inputs;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM inputs WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE inputs SET supplier = ?, address = ?, comments = ?, type = ? WHERE id = ?";
        var escapedValues = [obj.supplier, obj.address, obj.comments, obj.type, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE inputs SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
