import React, { Component } from 'react';
import { Navbar, Button, FormGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';

class Header extends Component {

  state = {
    email: '',
    password: ''
  }

  login = async () => {
    const { email, password } = this.state;
    let res = await axios.post('/auth/login', { email, password })
    this.setState({
      email: '',
      password: ''
    })
  }
  
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>Financial Stuff</Navbar.Brand>
          </Navbar.Header>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl
                onChange={ (e) => this.setState({ email: e.target.value }) } 
                type="text" 
                placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <FormControl
                onChange={ (e) => this.setState({ password: e.target.value }) }  
                type="text" 
                placeholder="Password" />
            </FormGroup>
            <Button onClick={ () => this.login() }type='submit'>Submit</Button>
          </Navbar.Form>
        </Navbar>
      </div>
    );
  }
}

export default Header;