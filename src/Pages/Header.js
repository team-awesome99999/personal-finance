import React, { Component } from 'react';
import { Navbar, Button, FormGroup, FormControl } from 'react-bootstrap';

class Header extends Component {

  state = {
    showLogin: false
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
              <FormControl type="text" placeholder="Email" />
            </FormGroup>
            <FormGroup>
            <FormControl type="text" placeholder="Password" />
            </FormGroup>
            <Button type='submit'>Submit</Button>
          </Navbar.Form>
        </Navbar>
      </div>
    );
  }
}

export default Header;