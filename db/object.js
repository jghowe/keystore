(function() {
    // object for in-memory data store
    var store = {};

    function setValue(key, value, callback) {
        store[key] = value;
        callback();
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

    module.exports = {
        set: setValue,
        get: getValue,
        del: deleteKey,
        keys: getKeys
    }
})();