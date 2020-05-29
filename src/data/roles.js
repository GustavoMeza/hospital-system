module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO roles (code) VALUES (?);";
        var escapedValues = [obj.code];
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
        var sql = "UPDATE SET code = ? WHERE id = ?";
        var escapedValues = [obj.code, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
