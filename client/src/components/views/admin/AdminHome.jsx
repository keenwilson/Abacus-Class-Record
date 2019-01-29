import React, { Component } from "react";

class AdminHome extends Component {
    state = {};

    render() {
        const css = require('./assets/css/Home.css').toString();

        return (
            <div>
                <style>${this.css}</style>
                <h1> Admin Home</h1>
            </div>
        );
    }
}

export default AdminHome;