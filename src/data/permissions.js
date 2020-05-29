module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO permissions (resource, action) VALUES (?, ?);";
        var escapedValues = [obj.resource, obj.action];
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
        var sql = "UPDATE SET resource = ?, action = ? WHERE id = ?";
        var escapedValues = [obj.resource, obj.action, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
