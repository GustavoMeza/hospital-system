module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO drugs (code, name, presentation, units) VALUES (?, ?, ?, ?);";
        var escapedValues = [obj.code, obj.name, obj.presentation, obj.units];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM drugs;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM drugs WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE SET code = ?, name = ?, presentation = ?, units = ? WHERE id = ?";
        var escapedValues = [obj.code, obj.name, obj.presentation, obj.units, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
