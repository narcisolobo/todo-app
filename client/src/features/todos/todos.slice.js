import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import todosService from "./todos.service";

const initialState = {
  todos: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// create new todo
export const createTodo = createAsyncThunk(
  'todos/create',
  async (todoData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await todosService.createTodo(todoData, token)
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
      return thunkAPI.rejectWithValue(message);
    }
  })

// get all user's todos
export const getUsersTodos = createAsyncThunk(
  'todos/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await todosService.getTodos(token);
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
      return thunkAPI.rejectWithValue(message);
    }
  }
)

// delete todo
export const deleteTodo = createAsyncThunk(
  'todos/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await todosService.deleteTodo(id, token);
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
      return thunkAPI.rejectWithValue(message);
    }
  }
)

// toggle todo
export const toggleTodo = createAsyncThunk(
  'todos/toggle',
  async (id, todoData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await todosService.toggleTodo(id, todoData, token);
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
      return thunkAPI.rejectWithValue(message);
    }
  }
)

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUsersTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsersTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos = action.payload;
      })
      .addCase(getUsersTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos = state.todos.filter(
          (todo) => todo._id !== action.payload.id
        )
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(toggleTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos = [...state, action.payload];
      })
      .addCase(toggleTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  }
})

export const { reset } = todosSlice.actions;
export default todosSlice.reducer;