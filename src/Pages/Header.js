import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Login from './Landing Page/Login'

class Header extends Component {

  state = {
    showLogin: false,
  }

  showLogin = () => {
    this.setState({
      showLogin: !this.state.showLogin
    })
  }

  render() {
    return (
      <div>
        <Navbar className='header'>
          <Navbar.Header>
            <Navbar.Brand>Asset Tracker</Navbar.Brand>
          </Navbar.Header>
          {this.state.showLogin ?
          <Login showLoginFn={this.showLogin}/>
          : 
          <Nav pullRight>
            <NavItem onClick={() => this.showLogin() }>Login</NavItem>
          </Nav>
          }
        </Navbar>
      </div>
    );
  }
}

export default Header;