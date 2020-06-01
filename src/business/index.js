module.exports = (dataServices, persistentServices) => ({
    findUserByUsername: async (username, agentId) => {
        var users = await persistentServices.readAll(dataServices.users, agentId);
        var result = users.find((user) => user.username == username);
        return result;
    },
});
