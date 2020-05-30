module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO patients (file, first_name, last_name, curp, birthdate, sex, address, floor, bed, diagnostic, arrival_time, departure_time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.file, obj.firstName, obj.lastName, obj.curp, obj.birthdate, obj.sex, obj.address, obj.floor, obj.bed, obj.diagnostic, obj.arrivalTime, obj.departureTime];
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
        var sql = "UPDATE patients SET file = ?, first_name = ?, last_name = ?, curp = ?, birthdate = ?, sex = ?, address = ?, floor = ?, bed = ?, diagnostic = ?, arrival_time = ?, departure_time = ? WHERE id = ?";
        var escapedValues = [obj.file, obj.firstName, obj.lastName, obj.curp, obj.birthdate, obj.sex, obj.address, obj.floor, obj.bed, obj.diagnostic, obj.arrivalTime, obj.departureTime, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE patients SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
