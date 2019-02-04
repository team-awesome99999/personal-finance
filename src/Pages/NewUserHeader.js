import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getCurrentUser } from '../dux/reducer';
import logo from './../ProjectLogo.png'

class Header extends Component {

  state = {
    loggedIn: false
  }

  async componentDidMount() {
    try {
      let res = await axios.get('/getsession');
      getCurrentUser(res.data.id);
      this.setState({ loggedIn: true })
    } catch(error) {
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
        <Navbar className='nav-color'>
          <Navbar.Header>
            <Navbar.Brand
              onClick={ () => this.props.history.push('/home') }  
              className='site-name'>
              <img className={logo}></img>
              Trassets
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem onClick={ () => this.logout() }>Logout</NavItem>
          </Nav>
        </Navbar>
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