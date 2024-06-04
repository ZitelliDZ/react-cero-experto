import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <NavLink
              name="Home"
                to="/"
                className={(args) =>
                  `nav-link ${args.isActive ? "active bg-danger" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                name="About"
                to="/about"
                className={(args) =>
                  `nav-link ${args.isActive ? "active bg-danger" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
              name="Login"
                to="/login"
                className={(args) =>
                  `nav-link ${args.isActive ? "active bg-danger" : ""}`
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
