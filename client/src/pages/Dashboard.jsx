import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from '../components/TodoForm';
import Spinner from '../components/Spinner';
import { getUsersTodos, reset } from '../features/todos/todos.slice';
import TodosList from '../components/TodosList';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const {
    todos,
    isLoading,
    isError,
    message
  } = useSelector((state) => state.todos);

  useEffect(() => {
    if (!user) navigate('/login');
    if (isError) console.log(message)
    
    dispatch(getUsersTodos())

    return () => dispatch(reset());

  }, [user, navigate, isError, message, dispatch])

  if (isLoading) return <Spinner />

  return (
    <>
    <div className="card mb-3">
      <div className="card-body text-center">
        <h2>{ user.username }</h2>
        <h5>Todos Dashboard</h5>
      </div>
    </div>
    <TodoForm />
    <TodosList todos={ todos } />
    </>
  );
};

export default Dashboard;
