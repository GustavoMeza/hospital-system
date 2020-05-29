module.exports = (connector) => ({
    readAll: () => {
        sql = "SELECT * FROM users;";
        return connector.execute(sql);
    },
});
