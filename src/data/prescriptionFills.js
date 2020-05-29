module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO prescription_fills (prescription, output) VALUES (?, ?);";
        var escapedValues = [obj.prescription, obj.output];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM prescription_fills;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM prescription_fills WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE SET prescription = ?, output = ? WHERE id = ?";
        var escapedValues = [obj.prescription, obj.output, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});