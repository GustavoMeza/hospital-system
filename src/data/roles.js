module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO roles (name, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?);";
        var escapedValues = [obj.name, obj.status, obj.originalId, obj.createdAt, obj.createdBy];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM roles;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM roles WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE roles SET name = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.name, obj.status, obj.originalId, obj.createdAt, obj.createdBy, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM roles WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
