/**  Required External Modules*/
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");

/**  App Variables */
const app = express();
const port = process.env.PORT || "4000";

/**  App Configurations */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/mocks', express.static(__dirname + '/mocks'));

app.disable('etag');

routes(app);

const server = app.listen(port, function () {
    console.log("app running on port.", server.address().port);
});



/**  add the prefix, */