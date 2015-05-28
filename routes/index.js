(function() {
    var express = require('express'),
        router = express.Router()
        storeHandler = require('./../handlers/store');

    router.get('/v1/store', storeHandler.getAll);
    router.get('/v1/store/:key', storeHandler.getValue);
    router.post('/v1/store', storeHandler.addValue);
    router.put('/v1/store/:key', storeHandler.updateValue);
    router.delete('/v1/store/:key', storeHandler.deleteKey);

    module.exports = router;
})();