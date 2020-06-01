module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO inputs (supplier, address, comments, type, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.supplier, obj.address, obj.comments, obj.type, obj.status, obj.originalId, obj.createdAt, obj.createdBy];
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
        var sql = "UPDATE inputs SET supplier = ?, address = ?, comments = ?, type = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.supplier, obj.address, obj.comments, obj.type, obj.status, obj.originalId, obj.createdAt, obj.createdBy, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM inputs WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
