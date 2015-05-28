(function () {

    var async = require('async'),
        _ = require('lodash'),
        db = require('../db');

    function getAll(req, res, next) {
        // obtain all keys in the data store and query their values (demonstrates chaining)
        async.waterfall([
            function (cb) {
                db.keys("*", cb);
            },
            function (keys, cb) {
                // query all values from list of keys (demonstrates concurrency)
                var queries = _.map(keys, function (key) {
                    return function (cb) {
                        db.get(key, cb);
                    }
                });

                async.parallel(queries, function (err, values) {
                    if (err) return cb(err);

                    var result = _.reduce(keys, function (obj, key, index) {
                        obj.push({
                            key: key,
                            value: values[index]
                        });
                        return obj;
                    }, []);

                    cb(null, result);
                });
            }
        ], function(err, result) {
            if (err) return next(err);

            res.status(200).send(result);
        });
    }

    function getValue(req, res, next) {
        db.get(req.params.key, function(err, value) {
            if (err) return next(err);
            if (!value) return res.status(404).end();

            var result = {
                key: req.params.key,
                value: value
            };

            res.status(200).send(result);
        });
    }

    function addValue(req, res, next) {
        db.set(req.body.key, req.body.value, function(err) {
            if (err) return next(err);

            res.status(201).end();
        });
    }

    function updateValue(req, res, next) {
        db.set(req.params.key, req.body.value, function(err) {
            if (err) return next(err);

            res.status(204).end();
        });
    }

    function deleteKey(req, res, next) {
        db.del(req.params.key, function(err) {
            if (err) return next(err);

            res.status(204).end();
        });
    }

    module.exports = {
        getAll: getAll,
        getValue: getValue,
        addValue: addValue,
        updateValue: updateValue,
        deleteKey: deleteKey
    };
})();