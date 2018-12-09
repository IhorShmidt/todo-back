"use strict";


const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const mongo = require('./db/connection');
const port = 3000;

mongo.connect();

var cors = require('cors')

app.use(cors())

// require('./config/express')(app)
app.use(bodyParser.urlencoded({extended: true, limit: '5mb'}))
app.use(bodyParser.json({limit: '5mb'}))
// app.use('/apidoc', express.static('apidoc'))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})
// app.use(bodyParser.urlencoded({extended: false}))
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

app.use((err, req, res, next) => {
    console.log('-----------------------')
    console.log(err)
    res.status(400).json({err: err})

})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
