'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const TodoModel = new Schema({
        name: {type: String, minLength: 2, maxLength: 200, required: true},
        done: {type: Boolean, default: false}
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('Todo', TodoModel);