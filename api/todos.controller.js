"use strict";

const todosService = require('./todos.servise');


module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    removeTodo
};

function getTodos(req, res, next) {

    todosService.getTodos().then((todos) => {
        res.status(200).json(todos);
    })
        .catch((err) => {
            next(err);
        });;

}

function createTodo(req, res, next) {

    const data = req.body;

    todosService.createTodo(data)
        .then((todos) => {
            res.status(200).json(todos);
        })
        .catch((err) => {
            next(err);
        });
}

function updateTodo(req, res, next) {
    const id = req.param('id');

    const data = req.body;
    todosService.updateTodo(id, data).then((todos) => {
        res.status(200).json(todos);
    })
        .catch((err) => {
            next(err);
        });
}

function removeTodo(req, res, next) {
    const todoId = req.param('id');
    todosService.removeTodo(todoId).then((todos) => {
        res.status(200).json(todos);
    })
        .catch((err) => {
            next(err);
        });
}