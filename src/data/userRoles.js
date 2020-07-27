// Returns a module to perform CRUD operations on user_roles
// Dependencies:
// - connector: A database connection pool
module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO user_roles (user, role, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.user, obj.role, obj.status, obj.original_id, obj.created_at, obj.created_by];
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
        var sql = "UPDATE user_roles SET user = ?, role = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.user, obj.role, obj.status, obj.original_id, obj.created_at, obj.created_by, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM user_roles WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
