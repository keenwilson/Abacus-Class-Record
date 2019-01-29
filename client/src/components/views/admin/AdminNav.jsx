import React from "react";
import { Link, NavLink } from "react-router-dom";

const AdminNav = ({ user }) => {
const css = require('./assets/css/Nav.css').toString();

  return (
      <div>
          <style>${this.css}</style>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="md-2">
                  <Link className="navbar-brand" to="/">
                      Abacus
                  </Link>
              </div>
              <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
                  <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav mx-auto">
                      <NavLink className="nav-item nav-link admin" to="/classrooms">
                          Classrooms
                      </NavLink>
                      <NavLink className="nav-item nav-link admin" to="/teachers">
                          Teachers
                      </NavLink>
                      <NavLink className="nav-item nav-link admin" to="/students">
                          Students
                      </NavLink>
                      <NavLink className="nav-item nav-link admin" to="/assignments">
                          Assignments
                      </NavLink>
                      {!user && (
                          <React.Fragment>
                              <NavLink className="nav-item nav-link user" to="/login">
                                  Login
                              </NavLink>
                              <NavLink className="nav-item nav-link user" to="/register">
                                  Register
                              </NavLink>
                          </React.Fragment>
                      )}
                      {user && (
                          <React.Fragment>
                              <NavLink className="nav-item nav-link user" to="/profile">
                                  {user.name}
                              </NavLink>
                              <NavLink className="nav-item nav-link user" to="/logout">
                                  Logout
                              </NavLink>
                          </React.Fragment>
                      )}
                  </div>
              </div>
          </nav>
      </div>
  );
};

export default AdminNav;
