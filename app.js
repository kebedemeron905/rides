/**  Required External Modules*/
const express = require("express");
const bodyParser = require("body-parser");
/** const routes = require("./routes/routes.js");*/
const path = require("path");

/**  App Variables */
const app = express();
const port = process.env.PORT || "8000";

/**  App Configurations */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(__dirname + '/images'));
app.use('/mocks', express.static(__dirname + '/mocks'));
app.disable('etag');

/** Routes Definations*/
app.get("/", (req, res) => {
    res.status(200).send("Request Uber rides");
  });

const server = app.listen(process.env.PORT || 4000, function () {
    console.log("app running on port.", server.address().port);
});


