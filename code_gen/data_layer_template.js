module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO $table (@col{$name}) VALUES (@col{?});";
        var escapedValues = [@col{obj.^name}];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM $table;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM $table WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE SET @col{$name = ?} WHERE id = ?";
        var escapedValues = [@col{obj.^name}, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
