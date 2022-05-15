const asyncHandler = require('express-async-handler');

/* 
  @desc:    fetch todos
  @route:   GET /api/todos
  @access:  Private
*/
const fetchTodos = asyncHandler(async (req, res) => {
  res.status(200).json({
    msg: 'all todos'
  });
})

/* 
  @desc:    create todo
  @route:   POST /api/todos
  @access:  Private
*/
const createTodo = asyncHandler(async (req, res) => {
  res.status(200).json({
    msg: 'create todo'
  });
})

/* 
  @desc:    fetch one todo
  @route:   GET /api/todos/:id
  @access:  Private
*/
const fetchTodo = asyncHandler(async (req, res) => {
  res.status(200).json({
    msg: `fetching post ${req.params.id}`
  });
})

/* 
  @desc:    update todo
  @route:   PUT /api/todos/:id
  @access:  Private
*/
const updateTodo = asyncHandler(async (req, res) => {
  res.status(200).json({
    msg: `updating post ${req.params.id}`
  });
})

/* 
  @desc:    delete todo
  @route:   DELETE /api/todos/:id
  @access:  Private
*/
const deleteTodo = asyncHandler(async (req, res) => {
  res.status(200).json({
    msg: `deleting post ${req.params.id}`
  });
})

module.exports = {
  fetchTodos,
  createTodo,
  fetchTodo,
  updateTodo,
  deleteTodo
}