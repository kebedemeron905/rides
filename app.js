var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(__dirname + '/images'));
app.use('/mocks', express.static(__dirname + '/mocks'));


app.disable('etag');

var server = app.listen(process.env.PORT || 8000, function () {
    console.log("app running on port.", server.address().port);
});