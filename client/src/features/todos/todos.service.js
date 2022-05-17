import axios from "axios";

const API_URL = 'http://localhost:5000/api/todos/';

const createTodo = async (todoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL, todoData, config);
  return response.data;
}

// get user's todos
const getTodos = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL, config);
  return response.data;
}

// delete todo
const deleteTodo = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.delete(API_URL + id, config);
  return response.data;
}

// toggle todo
const toggleTodo = async (id, todoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.put(API_URL + id, todoData, config);
  return response.data;
}

const todosService = {
  createTodo,
  getTodos,
  deleteTodo,
  toggleTodo
}

export default todosService;