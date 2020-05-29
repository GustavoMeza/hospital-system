module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO role_permissions (role, permission) VALUES (?, ?);";
        var escapedValues = [obj.role, obj.permission];
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
        var sql = "UPDATE SET role = ?, permission = ? WHERE id = ?";
        var escapedValues = [obj.role, obj.permission, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
