import TodoItem from "./TodoItem";

const TodosList = (props) => {
  const { todos } = props;

  return (
    <div className="card">
      <h2 className="card-header">Your Todos</h2>
      <div className="card-body">
        {
          todos.length > 0 ? 
          todos.map((todo) => {
            return (
              <TodoItem key={ todo._id } todo={ todo } />
            )
          }) :
          <h3>You have not created any todos.</h3>
        }
      </div>
    </div>
  )
}

export default TodosList;