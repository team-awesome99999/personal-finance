import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Login from './Landing Page/Login'
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getCurrentUser } from '../dux/reducer';
import logo from "./../ProjectLogo.png"
import '../App.css'

class Header extends Component {

  state = {
    showLogin: false,
    loggedIn: false
  }

  async componentDidMount() {
    try {
      let res = await axios.get('/getsession');
      getCurrentUser(res.data.id);
      this.setState({ loggedIn: true })
    } catch (error) {
      this.props.history.push('/');
    }
  }

  showLogin = () => {
    this.setState({
      showLogin: !this.state.showLogin
    })
  }

  logout = () => {
    axios.get('/auth/logout');
    this.props.history.push('/');
  }

  render() {

    return (
      <div>
        {/* navbar if user is NOT logged in */}
        {!this.state.loggedIn ?
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand onClick={() => this.props.history.push('/home')} href="#home">
                <img
                  alt="logo"
                  src={logo}
                />
                {/* {' Trassets'} */}
              </Navbar.Brand>
            </Navbar.Header>
            {this.state.showLogin ?
              <Login showLoginFn={this.showLogin} />
              :
              <Nav pullRight>
                <NavItem onClick={() => this.showLogin()}>Login</NavItem>
              </Nav>
            }
          </Navbar>
          :
          // Navbar if user IS logged in
          <Navbar className='header'>
            <Navbar.Brand onClick={() => this.props.history.push('/home')} href="#home">
                <img
                  alt="logo"
                  src={logo}
                />
                {/* {' Trassets'} */}
              </Navbar.Brand>
            <Navbar.Header>
            </Navbar.Header>
            <Nav pullRight>
              <NavItem className={ this.props.history.location.pathname === '/home' ? 'active' : null } onClick={() => this.props.history.push('/home') }  >Graphs</NavItem>
              <NavItem className={ this.props.history.location.pathname === '/accounts' ? 'active' : null } onClick={() => this.props.history.push('/accounts') }  >Accounts</NavItem>
              <NavItem className={ this.props.history.location.pathname === '/plans' ? 'active' : null } onClick={() => this.props.history.push('/plans') }  >Goals</NavItem>
              <NavItem onClick={() => this.logout()}>Logout</NavItem>
            </Nav>
          </Navbar>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userid: state.userid
  }
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(Header));