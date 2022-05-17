import { FaCheck, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/auth.slice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <Link to="/dashboard" className="navbar-brand">
          <div className="d-flex align-items-center">
            <FaCheck size={28} />
            <span className="ms-2 fs-3">WHAT A TODO!</span>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#hamburger"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="hamburger">
          <ul className="navbar-nav ms-auto">
            {
              user
              ? (
              <li className="nav-item">
                <button
                  className="btn btn-link text-white text-decoration-none"
                  onClick={ onLogout }
                >
                  <FaSignOutAlt className="me-2" />
                  <span>Logout</span>
                </button>
              </li>
              )
              : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    <div className="d-flex align-items-center">
                      <FaSignInAlt className="me-2" />
                      <span>Login</span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    <FaUser className="me-2" />
                    <span>Register</span>
                  </Link>
                </li>
              </>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
