"use strict";

const mongoose = require('mongoose');

module.exports = {
    connect,
    disconnect
};

function connect() {
    mongoose.set('debug', true);
    mongoose.connect('mongodb://localhost:27017/test2',  { useNewUrlParser: true }, (err, data) => {
        if (err) {
            console.log('Cannot connect to database');
        } else {
            console.log('Connection established')
        }

    })
}

function disconnect() {
    mongoose.disconnect((err) => {
        if (err) {
            console.log('Cannot close mongoose connection');
        } else {
            console.log('Connection closed');
        }
    })
}