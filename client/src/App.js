import React, { Component } from "react";
import MainContainer from "./containers/mainContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <MainContainer />
      </React.Fragment>
    );
  }
}

export default App;
