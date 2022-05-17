import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todos/todos.slice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div className="d-flex">
              <input
                className="form-check me-2"
                type="checkbox"
                onChange={
                  () => dispatch(toggleTodo(todo._id, {
                    isComplete: !todo.isComplete
                  }))
                }
              />
              <p className="card-text mb-0">
                { todo.title }
              </p>
            </div>
            <small className="text-muted">
              created: { new Date(todo.createdAt).toLocaleString('en-US') }
            </small>
          </div>
          <button
            onClick={ () => dispatch(deleteTodo(todo._id)) }
            className="btn btn-danger btn-sm">
            X
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem;