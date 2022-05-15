import { FaUser } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { username, email, password, confirm } = formData;

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
          <FaUser />
          <span className="ms-3">REGISTER</span>
        </div>
      </h2>
      <div className="card-body">
        <form onSubmit={ onSubmit }>
          <div className="mb-3">
            <label
              htmlFor="username"
              className="form-label">
              Username:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              onChange={ onChange }
              value={ username }
            />
          </div>
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
          <div className="mb-3">
            <label
              htmlFor="confirm"
              className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              className="form-control"
              onChange={ onChange }
              value={ confirm }
            />
          </div>
          <div className="d-flex justify-content-end">
            <input
              type="submit"
              value="Register"
              className="btn btn-outline-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
