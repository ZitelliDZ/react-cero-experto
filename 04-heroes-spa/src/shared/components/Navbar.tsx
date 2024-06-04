import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {

  const navigate = useNavigate();
  const {user, authState, logout } = useContext(AuthContext);


  const onLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };
  return (
    <nav className="navbar navbar-expand-lg   text-white bg-dark">
      <div className="container">
      <div className="container-fluid ">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <NavLink 
                to="/"
                className={(args) =>
                  `nav-link  text-white ${args.isActive ? "active bg-danger" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/dc"
                className={(args) =>
                  `nav-link  text-white ${args.isActive ? "active bg-danger" : ""}`
                }
              >
                DC
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/marvel"
                className={(args) =>
                  `nav-link  text-white ${args.isActive ? "active bg-danger" : ""}`
                }
              >
                Marvel
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/login"
                className={(args) =>
                  `nav-link  text-white ${args.isActive ? "active bg-danger" : ""}`
                }
              >
                Login
              </NavLink>
            </li> 
            <li>
              <NavLink 
                to="/search"
                className={(args) =>
                  `nav-link  text-white ${args.isActive ? "active bg-danger" : ""}`
                }
              >
                Search
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="collapse navbar-collapse   order-3 justify-content-end">
        <div className="navbar-nav ml-auto align-items-center gap-4">
                <span>
                  {user?.name}
                </span>
                <button className="nav-link nav-item btn btn-danger  text-white" onClick={onLogout}>
                  Logout

                </button>
        </div>

      </div>
      </div>
    </nav>
  );
};
