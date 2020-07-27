// Returns a module to perform CRUD operations on users
// Dependencies:
// - connector: A database connection pool
module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO users (username, first_name, last_name, salt, hash, shift, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.username, obj.first_name, obj.last_name, obj.salt, obj.hash, obj.shift, obj.status, obj.original_id, obj.created_at, obj.created_by];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM users;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM users WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE users SET username = ?, first_name = ?, last_name = ?, salt = ?, hash = ?, shift = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.username, obj.first_name, obj.last_name, obj.salt, obj.hash, obj.shift, obj.status, obj.original_id, obj.created_at, obj.created_by, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM users WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
