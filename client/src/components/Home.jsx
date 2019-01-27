import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

const Home = ({ user }) => {
  return (
    <div>
      <p>
        Abacus is the visual platform that gives teachers perspective on class
        attendances, assignments, and grades.
      </p>

      {!user && (
        <React.Fragment>
          <Link to="/login">Login</Link>
          <Link to="/register">register</Link>
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

      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
};

export default Home;
