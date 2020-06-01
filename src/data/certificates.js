module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO certificates (code, user, college, type) VALUES (?, ?, ?, ?);";
        var escapedValues = [obj.code, obj.user, obj.college, obj.type];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM certificates;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM certificates WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE certificates SET code = ?, user = ?, college = ?, type = ? WHERE id = ?";
        var escapedValues = [obj.code, obj.user, obj.college, obj.type, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE certificates SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
