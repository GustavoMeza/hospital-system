module.exports = (businessService) => ({
    seeAllUsers: require('./seeAllUsers')(businessService),
});
