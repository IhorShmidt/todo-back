"use strict";

const todosModel = require('../models/todo.model');

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    removeTodo
};


function getTodos() {

    return todosModel.find().then(todos => {
        return todos;
    });

}

function createTodo(data) {

    // const newTodo = data;
    // const {name} = data;
    const todoName = data.name;

    const newTodo = new todosModel({
        name: todoName
    });

    return newTodo.save().then(() => getTodos());
}

function updateTodo(todoId, data) {

    /*
    * CRUD
    * create
    * read
    * update
    * delete
    * */
    return todosModel.findOne({_id: todoId})
        .then((todo) => {
            todo = Object.assign(todo, data);
            return todo.save();
        })
        .then(() => getTodos());
}

function removeTodo(todoId) {

    // return todosModel.remove({_id: todoId})
    //     .then((removed) => {
    //         return removed;
    //     })
    return todosModel.findOne({_id: todoId})
        .then((removed) => {
            if (!removed) {
                throw new Error('No todod in database')
            }
            removed.remove();
        })
        .then(() => getTodos());

}