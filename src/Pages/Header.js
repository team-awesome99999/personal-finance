import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Login from './Landing Page/Login'
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getCurrentUser } from '../dux/reducer';
import logo from "./../ProjectLogo.png"

class Header extends Component {

  state = {
    showLogin: false,
    loggedIn: false,
    graphsActive: true,
    accountsActive: false,
    goalsActive: false
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

  accountsNavigation = () => {
    this.props.history.push('/accounts');
    this.setState({
      accountsActive: true,
      graphsActive: false,
      goalsActive: false
    })
  }
  graphsNavigation = () => {
    this.props.history.push('/home');
    this.setState({
      accountsActive: false,
      graphsActive: true,
      goalsActive: false
    })
  }
  goalsNavigation = () => {
    this.props.history.push('/plans');
    this.setState({
      accountsActive: false,
      graphsActive: false,
      goalsActive: true
    })
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
              <NavItem className={ this.state.graphsActive ? 'active' : null } onClick={() => this.graphsNavigation() }  >Graphs</NavItem>
              <NavItem className={ this.state.accountsActive ? 'active' : null } onClick={() => this.accountsNavigation() }  >Accounts</NavItem>
              <NavItem className={ this.state.goalsActive ? 'active' : null } onClick={() => this.goalsNavigation() }  >Goals</NavItem>
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