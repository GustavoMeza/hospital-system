// Returns a module to perform CRUD operations on patients
// Dependencies:
// - connector: A database connection pool
module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO patients (file, first_name, last_name, curp, birthdate, sex, address, floor, bed, diagnostic, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.file, obj.first_name, obj.last_name, obj.curp, obj.birthdate, obj.sex, obj.address, obj.floor, obj.bed, obj.diagnostic, obj.status, obj.original_id, obj.created_at, obj.created_by];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM patients;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM patients WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE patients SET file = ?, first_name = ?, last_name = ?, curp = ?, birthdate = ?, sex = ?, address = ?, floor = ?, bed = ?, diagnostic = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.file, obj.first_name, obj.last_name, obj.curp, obj.birthdate, obj.sex, obj.address, obj.floor, obj.bed, obj.diagnostic, obj.status, obj.original_id, obj.created_at, obj.created_by, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM patients WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
