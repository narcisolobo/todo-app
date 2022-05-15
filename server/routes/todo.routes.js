const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  fetchTodos,
  createTodo,
  fetchTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todo.controller');

router.route('/')
  .get(protect, fetchTodos)
  .post(protect, createTodo);

router.route('/:id')
  .get(protect, fetchTodo)
  .put(protect, updateTodo)
  .delete(protect, deleteTodo);

module.exports = router;