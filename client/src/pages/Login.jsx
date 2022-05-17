import { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/auth.slice";
import Spinner from '../components/Spinner';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {
    user,
    isLoading,
    isError,
    isSuccess,
    message
  } = useSelector(state => state.auth);

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) navigate('/dashboard');
    dispatch(reset());

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password
    }
    
    dispatch(login(userData));
  };

  if (isLoading) return <Spinner />

  return (
    <div className="card bg-dark text-light">
      <h2 className="card-header">
        <div className="d-flex align-items-center">
          <FaSignInAlt />
          <span className="ms-3">LOGIN</span>
        </div>
      </h2>
      <div className="card-body">
        <form onSubmit={ onSubmit }>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              onChange={ onChange }
              value={ email }
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              onChange={ onChange }
              value={ password }
            />
          </div>
          <div className="d-flex justify-content-end">
            <input
              type="submit"
              value="Login"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
