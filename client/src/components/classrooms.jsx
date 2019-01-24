import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { List, ListItem } from "../components/common/List";
import API from "../utils/API";

class Classrooms extends Component {
  state = {
    classrooms: []
  };
  componentDidMount() {
    this.loadClassrooms();
  }

  loadClassrooms = () => {
    API.getClassrooms()
      .then(res =>
        this.setState({
          classrooms: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleViewClassroom = id => {
    API.viewClassroom(id)
      .then(res => {
        this.setState({
          classroom: res.data
        });
      })
      .catch(err => console.log(err));
  };
  handleDeleteClassroom = id => {
    API.deleteClassroom(id)
      .then(res => this.loadClassrooms())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { user } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <h1 className="text-center">Show all classrooms in the database</h1>
            {this.state.classrooms.length ? (
              <List>
                {this.state.classrooms.map(classroom => (
                  <ListItem key={classroom._id}>
                    <strong>{classroom.subject}</strong>
                    <strong>{classroom._id}</strong>
                    <img
                      height="200"
                      src={classroom.imagePath}
                      alt={classroom.subject}
                    />

                    <Link
                      to={"/classrooms/" + classroom._id}
                      onClick={() => this.handleViewClassroom(classroom._id)}
                    >
                      View {classroom.subject}
                    </Link>
                    <button
                      className="btn-danger"
                      onClick={() => this.handleDeleteClassroom(classroom._id)}
                    >
                      X
                    </button>
                  </ListItem>
                ))}
              </List>
            ) : (
              <strong>No Results to Display</strong>
            )}
          </div>

          <div className="col-md-6" />
          {this.state.classroom ? (
            <div>
              <h1 className="text-center">Classroom</h1>
              <h1 className="text-center">Unique Classroom</h1>
              <h1 className="text-center">
                Show classroom info from the database
              </h1>
              <div>Classroom ID: {this.state.classroom._id}</div>
              <div>
                Subject: <strong>{this.state.classroom.subject}</strong>
              </div>
              ><div>Room Number: {this.state.classroom.roomNumber}</div>>
              <img
                height="200"
                src={this.state.classroom.imagePath}
                alt={this.state.classroom.subject}
              />
            </div>
          ) : (
            <strong>No current classroom to Display</strong>
          )}
        </div>
      </div>
    );
  }
}

export default Classrooms;
