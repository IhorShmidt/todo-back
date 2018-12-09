"use strict";

const todosService = require('./todos.servise');


module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    removeTodo
};

function getTodos(req, res) {

    todosService.getTodos().then((todos) => {
        res.status(200).json(todos);
    });

}

function createTodo(req, res) {

    const data = req.body;

    todosService.createTodo(data)
        .then((newTodo) => {
            res.status(200).json(newTodo);
        })
}

function updateTodo(req, res) {
    const id = req.param('id');

    const data = req.body;
    todosService.updateTodo(id, data).then((updatedTodo) => {
        res.status(200).json(updatedTodo);
    });
}

function removeTodo(req, res) {
    const todoId = req.param('id');
    todosService.removeTodo(todoId).then(() => {
        res.status(200).json({ok: 'ok'})
    })
}