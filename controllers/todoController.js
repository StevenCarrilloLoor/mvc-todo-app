const Todo = require('../models/Todo');

exports.getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.render('index', { todos });
};

exports.addTodo = async (req, res) => {
    const { task } = req.body;
    if (task) {
        await Todo.create({ task });
    }
    res.redirect('/');
};

exports.deleteTodo = async (req, res) => {
    const id = req.params.id;
    await Todo.findByIdAndDelete(id);
    res.redirect('/');
};
