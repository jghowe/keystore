(function() {

    var redis = require('redis'),
        object = require('./object');
        config = require('../config');

    // if redis host is not defined, used in-memory data store instead
    if (!config.redisHost) {
        module.exports = object;
    }
    // otherwise use redis client
    else {
        module.exports = redis.createClient(config.redisPort, config.redisHost);
    }
})();