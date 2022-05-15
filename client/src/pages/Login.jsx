import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

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
