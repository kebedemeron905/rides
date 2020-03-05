
const express = require("express");
const rideresponse = "./mocks/rideresponse.json";

// import util js file
const util = require("./utils.js")

var appRouter = function (app) {

    //POST:  http://localhost:4000/api/v1/request-ride
    app.post("/api/v1/request-ride", function (req, res) {
        

        // call js function
        var body = util.readSampleJson(rideresponse);  
        res.status(200).send(body);
    });

}
module.exports = appRouter