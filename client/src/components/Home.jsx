import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

const css = require('./assets/css/home.css').toString();

const Home = ({ user }) => {
  return (
    <div>
        <style>${css}</style>
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo"><i className="far fa-abacus"></i> Abacus</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                    <i className="fa fa-bars"></i>
                </a>
                <ul className="right hide-on-med-and-down">
                    {!user && (
                        <React.Fragment>
                            <li><Link to="/register">Sign Up</Link></li>
                            <li><Link to="/login"><button className="waves-effect waves-light btn">Login</button></Link></li>
                        </React.Fragment>
                    )}
                    {user && (
                        <React.Fragment>
                            <p>Hi {user.name} !</p>
                            <Link to="/teacher">View Teacher</Link>
                            <Link to="/admin">View Admin</Link>
                            <Link to="/logout">Logout</Link>
                        </React.Fragment>
                    )}
                </ul>
            </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
        </ul>

        <div className="parallax-container">
            <div className="parallax">
                <div className="parallax"><img src="./assets/images/abacus-lockers.jpg"/></div>
                <div className="parallax-header">
                    <h2 className="header">Welcome to Abacus</h2>
                    <p>Abacus is the visual platform that gives teachers perspective on class attendances, assignments, and grades.</p>
                </div>
            </div>
        </div>
        <div className="section white">
            <div className="row container center">
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image card-attendance">
                            <i className="far fa-bullhorn"></i>
                            <h6 className="card-title">Attendance</h6>
                        </div>
                        <div className="card-content">
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda beatae
                                corporis delectus, deleniti ducimus ea enim exercitationem expedita facere labore libero
                                magnam qui quisquam sapiente velit veniam veritatis voluptate?
                            </div>
                        </div>
                        <div className="card-action">
                            <button className="waves-effect waves-light btn">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image card-assignments">
                            <i className="fal fa-file-alt"></i>
                            <h6 className="card-title">Assignments</h6>
                        </div>
                        <div className="card-content">
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda beatae
                                corporis delectus, deleniti ducimus ea enim exercitationem expedita facere labore libero
                                magnam qui quisquam sapiente velit veniam veritatis voluptate?
                            </div>
                        </div>
                        <div className="card-action">
                            <button className="waves-effect waves-light btn">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image card-grades">
                            <i className="far fa-book"></i>
                            <h6 className="card-title">Grades</h6>
                        </div>
                        <div className="card-content">
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda beatae
                                corporis delectus, deleniti ducimus ea enim exercitationem expedita facere labore libero
                                magnam qui quisquam sapiente velit veniam veritatis voluptate?
                            </div>
                        </div>
                        <div className="card-action">
                            <button className="waves-effect waves-light btn">
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
                    <h1>About Abacus</h1>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque consequuntur enim
                        eos facere incidunt laborum perferendis tempora totam voluptatibus. Amet atque consectetur eaque
                        est et in ratione suscipit vitae.
                    </div>
                    <div>Doloribus eaque fuga illum nesciunt officiis praesentium quae quasi quibusdam totam ut? Ad,
                        alias, distinctio eius eveniet, fuga harum ipsum iure labore molestiae odit quibusdam soluta
                        temporibus vel! Molestias, temporibus!
                    </div>
                    <div>Magni minima quaerat quia quo reprehenderit. A adipisci aperiam beatae blanditiis cupiditate,
                        facere harum, id impedit molestias neque nulla obcaecati perferendis possimus praesentium, rem
                        repellendus similique sint soluta tempore ut.
                    </div>
                </div>
                <div className="col s12 m4">
                    <img src="https://assets.pcmag.com/media/images/588342-classroom-teachers-student.jpg?thumb=y&width=425&height=340" alt="placeholder image" />
                </div>
            </div>
        </div>
        <div className="section grey darken-3">
            <div className="row container white-text">
                <div className="col s12 m4 left-align">
                    <ul>
                        <React.Fragment>
                            <li><Link to="/register">Sign Up</Link></li>
                            <li><Link to="/login"><button className="waves-effect waves-light btn">Login</button></Link></li>
                        </React.Fragment>
                    </ul>
                </div>
                <div className="col s12 m4 center-align">
                    <i className="far fa-abacus"></i> Abacus
                </div>
                <div className="col s12 m4 right-align">
                    <ul>
                        <li><i className="fab fa-github"></i> Victor Adams</li>
                        <li><i className="fab fa-github"></i> Reed Kroh</li>
                        <li><i className="fab fa-github"></i> Andrew Ulm</li>
                        <li><i className="fab fa-github"></i> Keen Wilson</li>
                    </ul>
                </div>
            </div>
        </div>

      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
};

export default Home;
