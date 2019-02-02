import React from "react";
import { Link } from "react-router-dom";

const css = require("./assets/css/home.css").toString();

const Home = ({ user }) => {
  return (
    <div className="homepage">
      <style>${css}</style>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            <i className="far fa-abacus" /> <span>Abacus</span>
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="fa fa-bars" />
          </a>
          <ul className="right hide-on-med-and-down">
            {!user && (
              <React.Fragment>
                <li>
                  <Link to="/register">
                    <div className="btn waves-effect waves-light transparent">
                      Sign Up
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <div className="btn waves-effect waves-light transparent">
                      Login
                    </div>
                  </Link>
                </li>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <p className="black-text text-darken-2">Hi, {user.name}</p>
                <Link to="/teacher">View Teacher</Link>
                <Link to="/admin">View Admin</Link>
                <Link to="/logout">Logout</Link>
              </React.Fragment>
            )}
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/teacher">View Teacher</Link>
        </li>
        <li>
          <Link to="/admin">View Admin</Link>
        </li>
        {user && (
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        )}
        {!user && (
          <React.Fragment>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </React.Fragment>
        )}
      </ul>

      <div className="parallax-container">
        <div className="parallax">
          <div className="parallax">
            <img src="https://i.imgur.com/1JfRMJq.jpg" alt="Classroom Locker" />
          </div>
          <div className="parallax-header">
            <h2 className="header">Welcome to Abacus</h2>
            <p>
              Abacus is the visual platform that gives teachers perspective on
              class attendances, assignments, and grades.
            </p>
          </div>
        </div>
      </div>
      <div className="section white">
        <div className="row container center">
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image card-attendance">
                <i className="far fa-bullhorn" />
                <h6 className="card-title">Attendance</h6>
              </div>
              <div className="card-content">
                <div>
                  Abacus gives you one place, a reliable database, to digitally
                  track all of your critical information, clearly visualize your
                  analytics, and get at-a-glance insights into what's going on
                  in your classes.
                </div>
              </div>
              <div className="card-action">
                <button className="waves-effect waves-light teal lighten-3 btn">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image card-assignments">
                <i className="fal fa-file-alt" />
                <h6 className="card-title">Assignments</h6>
              </div>
              <div className="card-content">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam assumenda beatae corporis delectus, deleniti ducimus
                  ea enim exercitationem expedita facere labore libero velit
                  veniam veritatis voluptate?
                </div>
              </div>
              <div className="card-action">
                <button className="waves-effect waves-light teal lighten-3 btn">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image card-grades">
                <i className="far fa-book" />
                <h6 className="card-title">Grades</h6>
              </div>
              <div className="card-content">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam assumenda beatae corporis delectus, deleniti ducimus
                  ea enim facere labore libero magnam qui quisquam sapiente
                  velit veniam veritatis voluptate?
                </div>
              </div>
              <div className="card-action">
                <button className="waves-effect waves-light teal lighten-3 btn">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section grey lighten-4">
        <div className="row container">
          <div className="col s12 m8">
            <h1>About Abacus Inc.</h1>
            <div>
              Found in 2019, Abacus consectetur adipisicing elit. Asperiores
              atque consequuntur enim eos facere incidunt laborum perferendis
              tempora totam voluptatibus. Amet atque consectetur eaque est et in
              ratione suscipit vitae.
              <br />
            </div>
            <div>
              Doloribus eaque fuga illum nesciunt officiis praesentium quae
              quasi quibusdam totam ut? Ad, alias, distinctio eius eveniet, fuga
              harum ipsum iure labore molestiae odit quibusdam soluta temporibus
              vel! Molestias, temporibus!
              <br />
            </div>
            <div>
              Magni minima quaerat quia quo reprehenderit. A adipisci aperiam
              beatae blanditiis cupiditate, facere harum, id impedit molestias
              neque nulla obcaecati perferendis possimus praesentium, rem
              repellendus similique sint soluta tempore ut.
              <br />
            </div>
          </div>
          <div className="col s12 m4 placeholder-image">
            <img src="https://i.imgur.com/s8mEukX.jpg" alt="Tables" />
          </div>
        </div>
      </div>
      <div className="section grey darken-3">
        <div className="row container white-text abacus-footer-links">
          <div className="col s12 m4 left-align">
            <ul>
              {!user && (
                <React.Fragment>
                  <li>
                    <Link to="/register">
                      <div className="btn waves-effect waves-light transparent">
                        Sign Up
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <div className="btn waves-effect waves-light transparent">
                        Login
                      </div>
                    </Link>
                  </li>
                </React.Fragment>
              )}
              {user && (
                <React.Fragment>
                  <li>
                    <Link to="/teacher">
                      <div className="btn waves-effect waves-light transparent">
                        View Teacher
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin">
                      <div className="btn waves-effect waves-light transparent">
                        View Admin
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/logout">
                      <div className="btn waves-effect waves-light transparent">
                        Logout
                      </div>
                    </Link>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
          <div className="col s12 m4 center-align">
            <p className="card-title abacus-footer">
              {" "}
              <i className="far fa-abacus" />
              <br /> Abacus
            </p>
          </div>
          <div className="col s12 m4 right-align">
            <ul>
              <li>
                <a
                  href="https://github.com/Kysper"
                  className="btn waves-effect waves-light transparent"
                >
                  <i className="fab fa-github" /> Victor Adams
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/reedkroh"
                  className="btn waves-effect waves-light transparent"
                >
                  <i className="fab fa-github" /> Reed Kroh
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/andrewulm"
                  target="_blank"
                  className="btn waves-effect waves-light transparent"
                >
                  <i className="fab fa-github" /> Andrew Ulm
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/keenwilson"
                  className="btn waves-effect waves-light transparent"
                >
                  <i className="fab fa-github" /> Keen Wilson
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
