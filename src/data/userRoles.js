module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO user_roles (user, role) VALUES (?, ?);";
        var escapedValues = [obj.user, obj.role];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM user_roles;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM user_roles WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE SET user = ?, role = ? WHERE id = ?";
        var escapedValues = [obj.user, obj.role, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
