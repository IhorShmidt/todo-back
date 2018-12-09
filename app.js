"use strict";


const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const mongo = require('./db/connection');
const port = 3000;

mongo.connect();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    console.log('Time [ ', new Date(Date.now()), ' ]');
    next();
});
app.use(function (req, res, next) {
    console.log('Request Type [ ', req.method, ' ]');
    next();
});

app.use('/api', require('./api'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
