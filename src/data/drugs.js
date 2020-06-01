module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO drugs (internal_code, name, presentation, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.internalCode, obj.name, obj.presentation, obj.status, obj.originalId, obj.createdAt, obj.createdBy];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM drugs;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM drugs WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE drugs SET internal_code = ?, name = ?, presentation = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.internalCode, obj.name, obj.presentation, obj.status, obj.originalId, obj.createdAt, obj.createdBy, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM drugs WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
