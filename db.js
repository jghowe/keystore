(function() {

    var redis = require('redis'),
        config = require('./config');

    // object for in-memory data store
    var store = {};

    function setValue(key, value, callback) {
        var isNew = store[key] === undefined;
        store[key] = value;
        callback(null, isNew);
    }

    function getValue(key, callback) {
        callback(null, store[key]);
    }

    function getKeys(pattern, callback) {
        callback(null, Object.keys(store));
    }

    function deleteKey(key, callback) {
        delete store[key];
        callback();
    }

    // if redis host is not defined, used in-memory data store instead
    if (!config.redisHost) {
        module.exports = {
            set: setValue,
            get: getValue,
            del: deleteKey,
            keys: getKeys
        }
    }
    // otherwise use redis client
    else {
        module.exports = redis.createClient(config.redisPort, config.redisHost);
    }
})();