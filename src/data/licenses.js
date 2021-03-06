// Returns a module to perform CRUD operations on licenses
// Dependencies:
// - connector: A database connection pool
module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO licenses (code, user, college, type, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.code, obj.user, obj.college, obj.type, obj.status, obj.original_id, obj.created_at, obj.created_by];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM licenses;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM licenses WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE licenses SET code = ?, user = ?, college = ?, type = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.code, obj.user, obj.college, obj.type, obj.status, obj.original_id, obj.created_at, obj.created_by, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM licenses WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
