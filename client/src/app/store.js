import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth.slice";
import todosReducer from "../features/todos/todos.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer
  },
});
