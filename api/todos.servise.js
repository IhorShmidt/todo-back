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
        console.log('- iM in todos motherfukcer----------------------')
        console.log(todos)
        console.log('-----------------------')
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

    return newTodo.save();
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
        });
}
function removeTodo(todoId) {

    // return todosModel.remove({_id: todoId})
    //     .then((removed) => {
    //         return removed;
    //     })
    return todosModel.findOne({_id: todoId})
        .then((removed) => {
            removed.remove();
        });

}