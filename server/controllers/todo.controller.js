const asyncHandler = require('express-async-handler');
const Todo = require('../models/todo.model');

/* 
  @desc:    fetch todos
  @route:   GET /api/todos
  @access:  Private
*/
const fetchTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
});

/* 
  @desc:    create todo
  @route:   POST /api/todos
  @access:  Private
*/
const createTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(200).json(todo);
});

/* 
  @desc:    fetch one todo
  @route:   GET /api/todos/:id
  @access:  Private
*/
const fetchTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400).json({ msg: `Todo not found.` })
  }

  res.status(200).json(todo);
});

/* 
  @desc:    update todo
  @route:   PUT /api/todos/:id
  @access:  Private
*/
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400).json({ msg: 'todo not found' });
  }

  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.status(200).json(updatedTodo);
});

/* 
  @desc:    delete todo
  @route:   DELETE /api/todos/:id
  @access:  Private
*/
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  await todo.remove();
  res.status(200).json({
    id: req.params.id
  });
});

module.exports = {
  fetchTodos,
  createTodo,
  fetchTodo,
  updateTodo,
  deleteTodo
}