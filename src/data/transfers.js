module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO transfers (input, document, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.input, obj.document, obj.status, obj.originalId, obj.createdAt, obj.createdBy];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM transfers;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM transfers WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE transfers SET input = ?, document = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.input, obj.document, obj.status, obj.originalId, obj.createdAt, obj.createdBy, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM transfers WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
