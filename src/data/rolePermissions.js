module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO role_permissions (role, permission, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.role, obj.permission, obj.status, obj.original_id, obj.created_at, obj.created_by];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM role_permissions;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM role_permissions WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE role_permissions SET role = ?, permission = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.role, obj.permission, obj.status, obj.original_id, obj.created_at, obj.created_by, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM role_permissions WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
