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
    return <MainContainer />;
  }
}

export default App;
