import React, { Component } from 'react';
import fire from './config/Fire';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <Container>
          <Row>
            <Col>
              <label for="exampleInputEmail1">Email address</label>
              <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </Col>
            <Col>
              <label for="exampleInputPassword1">Password</label>
              <input value={this.state.password} onChange={this.handleChange} type="password" name="password"  id="exampleInputPassword1" placeholder="Password" />
            </Col>
            <Col>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              <Button onClick={this.signup}>Signup</Button>
              <Button type="submit" onClick={this.login}>Login</Button>
            </Col>
          </Row>
        </Container>  
      </Form>

    </Navbar.Collapse>
  </Navbar>
    );
  }
}
export default Login;