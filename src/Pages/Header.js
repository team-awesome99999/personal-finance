import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Login from './Landing Page/Login'
import { withRouter } from 'react-router-dom'

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
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>Financial Stuff</Navbar.Brand>
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

export default withRouter(Header);