module.exports = (connector) => ({
    users : require('./users')(connector),
});
