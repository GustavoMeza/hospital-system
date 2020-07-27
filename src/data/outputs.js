// Returns a module to perform CRUD operations on outputs
// Dependencies:
// - connector: A database connection pool
module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO outputs (sign, batch, quantity, comment, type, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.sign, obj.batch, obj.quantity, obj.comment, obj.type, obj.status, obj.original_id, obj.created_at, obj.created_by];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM outputs;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM outputs WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE outputs SET sign = ?, batch = ?, quantity = ?, comment = ?, type = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.sign, obj.batch, obj.quantity, obj.comment, obj.type, obj.status, obj.original_id, obj.created_at, obj.created_by, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM outputs WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
