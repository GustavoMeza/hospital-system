module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO prescriptions (code, patient, doctor, issue_date, comments) VALUES (?, ?, ?, ?, ?);";
        var escapedValues = [obj.code, obj.patient, obj.doctor, obj.issueDate, obj.comments];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM prescriptions;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM prescriptions WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE SET code = ?, patient = ?, doctor = ?, issue_date = ?, comments = ? WHERE id = ?";
        var escapedValues = [obj.code, obj.patient, obj.doctor, obj.issueDate, obj.comments, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
