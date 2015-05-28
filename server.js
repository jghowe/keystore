var express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./config');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./routes'));

app.listen(config.port, function () {
    console.log("Express server listening on port " + config.port);
});
