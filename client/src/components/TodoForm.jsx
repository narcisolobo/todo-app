import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../features/todos/todos.slice';

const TodoForm = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo({
      title,
      isComplete: false
    }));
    setTitle('');
  }

  return (
    <div className="card mb-3">
      <h2 className="card-header">Create Todo</h2>
      <div className="card-body">
        <form onSubmit={ handleSubmit }>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">What do you need to do?</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              onChange={ e => setTitle(e.target.value) }
              value={ title }
            />
          </div>
          <div className="d-flex justify-content-end">
            <input type="submit" value="Add Task" className="btn btn-primary btn-sm" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default TodoForm