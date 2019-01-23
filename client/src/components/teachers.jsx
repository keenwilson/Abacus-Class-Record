import React, { Component } from "react";
import { Col, Row, Container } from "../components/common/Grid";
import { List, ListItem } from "../components/common/List";
import API from '../utils/API';

class Teachers extends Component {
    state = {
        teachers: [],
        firstName: '',
        lastName: '',
        email: '',
        editTeacher: false
    };

    componentDidMount() {
        this.loadTeachers();
    };

    loadTeachers = () => {
        API.getTeachers()
            .then(res =>
                this.setState({
                    teachers: res.data,
                    firstName: '',
                    lastName: '',
                    email: ''
            }))
            .catch(err => console.log(err));
    };

    deleteTeacher = id => {
        API.deleteTeacher(id)
            .then(res => this.loadTeachers())
            .catch(err => console.log(err));
    };

    editTeacher = id => {
      // TODO: Add edit teacher function
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if( this.state.firstName && this.state.lastName && this.state.email ) {
            API.saveTeacher({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email
            })
                .then(res => this.loadTeachers())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <h1 className="text-center">Teachers</h1>
                        <h2 className="text-center">Add New Teacher</h2>
                        <form>
                            <div className="formControl">
                                <label htmlFor="teacherFirstName">First Name:</label>
                                <input type="text" id="teacherFirstName" name="firstName" placeholder="First Name..."
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange} />
                            </div>
                            <div className="formControl">
                                <label htmlFor="teacherLastName">Last Name:</label>
                                <input type="text" id="teacherLastName" name="lastName" placeholder="Last Name..."
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange} />
                            </div>
                            <div className="formControl">
                                <label htmlFor="teacherEmail">E-Mail:</label>
                                <input type="text" id="teacherEmail" name="email" placeholder="E-Mail..."
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                            </div>
                            <input type="submit" value="Add Teacher"
                                    disabled={!(this.state.firstName && this.state.lastName && this.state.email)}
                                    onClick={this.handleFormSubmit} />
                        </form>
                    </Col>
                    <Col size="md-6">
                        <h2 className="text-center">Show all teachers in database</h2>
                        {/* Output All teachers Loop // Start */}
                            {this.state.teachers.length ? (
                                <List>
                                    {this.state.teachers.map(teacher => (
                                        <ListItem key={teacher._id}>
                                            <strong>
                                                {teacher.firstName},&nbsp;
                                                {teacher.lastName},&nbsp;
                                            </strong>
                                            {teacher.email}
                                            <button
                                                className="btn-danger"
                                                onClick={() => this.deleteTeacher(teacher._id)}>
                                                X
                                            </button>
                                            <button
                                                className="btn-success"
                                                onClick={() => this.editTeacher(teacher._id)}>
                                                X
                                            </button>
                                        </ListItem>
                                    ))}
                                </List>
                            ) : (
                                <strong>No Results to Display</strong>
                            )}
                        {/* Output All teachers Loop // End */}
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        Nothing
                    </Col>
                    <Col size="md-6">
                        {/* TODO: Edit Teacher Form */}
                        {/*
                        {this.state.editTeacher ? (
                            <form>
                                <div className="formControl">
                                    <label htmlFor="teacherFirstName">First Name:</label>
                                    <input type="text" id="teacherFirstName" name="firstName" placeholder="First Name..."
                                           value={this.state.firstName}
                                           onChange={this.handleInputChange} />
                                </div>
                                <div className="formControl">
                                    <label htmlFor="teacherLastName">Last Name:</label>
                                    <input type="text" id="teacherLastName" name="lastName" placeholder="Last Name..."
                                           value={this.state.lastName}
                                           onChange={this.handleInputChange} />
                                </div>
                                <div className="formControl">
                                    <label htmlFor="teacherEmail">E-Mail:</label>
                                    <input type="text" id="teacherEmail" name="email" placeholder="E-Mail..."
                                           value={this.state.email}
                                           onChange={this.handleInputChange} />
                                </div>
                                <input type="submit" value="Add Teacher"
                                       disabled={!(this.state.firstName && this.state.lastName && this.state.email)}
                                       onClick={this.handleFormSubmit} />
                            </form>
                        ):(
                            <p>Something Else</p>
                        )}*/}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Teachers;
