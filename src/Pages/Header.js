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
          <Navbar bg="dark" variant="dark">
            <Navbar.Header>
              <Navbar.Brand>
                <img className="trassetLogo" alt="logo" src={logo}></img>
                Trassets
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
            <Navbar.Brand
              onClick={() => this.props.history.push('/home')}
              className='site-name'>
              <img className="trassetLogo" alt="logo" src={logo}></img>
              Trassets
            </Navbar.Brand>
            <Navbar.Header>
            </Navbar.Header>
            <Nav pullRight>
              <NavItem onClick={() => this.props.history.push('/accounts')}  >Accounts</NavItem>
              <NavItem onClick={() => this.props.history.push('/home')}  >Graphs</NavItem>
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