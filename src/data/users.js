module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO users (username, first_name, last_name, password, shift) VALUES (?, ?, ?, ?, ?);";
        var escapedValues = [obj.username, obj.firstName, obj.lastName, obj.password, obj.shift];
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
        var sql = "UPDATE users SET username = ?, first_name = ?, last_name = ?, password = ?, shift = ? WHERE id = ?";
        var escapedValues = [obj.username, obj.firstName, obj.lastName, obj.password, obj.shift, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE users SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
