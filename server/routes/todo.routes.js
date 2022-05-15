const express = require('express');
const router = express.Router();
const {
  fetchTodos,
  createTodo,
  fetchTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todo.controller');

router.route('/')
  .get(fetchTodos)
  .post(createTodo);

router.route('/:id')
  .get(fetchTodo)
  .put(updateTodo)
  .delete(deleteTodo);

module.exports = router;