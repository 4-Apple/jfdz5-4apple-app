import React from 'react'
import {connect} from 'react-redux'
import {Button, Col, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";

class RegistrationForm extends React.Component {

    state = {
        userName: '',
        password: ''
    }

    render() {
        return (
            <div>
                <h1>RegistationForm</h1>
                <Form horizontal onSubmit={(event) => {
                    event.preventDefault()

                    this.props.addNewUser(this.state.userName, this.state.password)
                }}>
                    <FormGroup controlId="formHorizontalEmail" onChange={(event) => {

                        this.setState({
                            userName: event.target.value
                        })
                    }}>
                        <Col componentClass={ControlLabel} sm={2}>
                            User name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email"/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword"
                               onChange={(event) => {

                                   this.setState({
                                       password: event.target.value
                                   })
                               }}>
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password"/>
                        </Col>
                    </FormGroup>


                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default connect(
    null,
    dispatch => ({
        // addNewUser: {
        //     userName: this.state.userName,
        //     password: this.state.password
        // }
        addNewUser: (userName, password) => dispatch({
            type: 'addNewUser',
            userName, password
        })
    })
)(RegistrationForm)