module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO permissions (action, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?);";
        var escapedValues = [obj.action, obj.status, obj.originalId, obj.createdAt, obj.createdBy];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM permissions;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM permissions WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE permissions SET action = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.action, obj.status, obj.originalId, obj.createdAt, obj.createdBy, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM permissions WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
