'use strict';

const express = require('express');
const todosController = require('./todos.controller');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({version: 'v2'});
});

router.get('/todos', todosController.getTodos);
router.put('/todos/:id', todosController.updateTodo);
router.post('/todos', todosController.createTodo);
router.delete('/todos/:id', todosController.removeTodo);

module.exports = router;