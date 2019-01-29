import React, { Component } from 'react';
import { Navbar, Button, FormGroup, FormControl, Nav, NavItem, Tooltip } from 'react-bootstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

class Header extends Component {

  state = {
    showLogin: false,
    email: '',
    password: '',
    emailValidation: null,
    passwordValidation: null
  }

  login = async () => {
    const { email, password } = this.state;
    try {
      let res = await axios.post('/auth/login', { email, password })
      console.log(res.data)
      this.setState({
        email: '',
        password: ''
      })
    } catch(error) {
      if(error.response.data.message === 'Email not found') {
        this.setState({ emailValidation: 'error' })
      } else if(error.response.data.message === 'Incorrect Password') {
        this.setState({ passwordValidation: 'error' })
      }
  }
    //ONCE HOME PAGE IS BUILD THE LOGIN CAN PUSH THERE WITH COMMENT BELOW
    // this.props.history.push('/home');
  }
  
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>Financial Stuff</Navbar.Brand>
          </Navbar.Header>
          {this.state.showLogin ?
          <Navbar.Form pullRight>
            <FormGroup validationState={this.state.emailValidation}>
              <FormControl
                autoFocus
                value={ this.state.email }
                onChange={ (e) => this.setState({ email: e.target.value, emailValidation: null }) } 
                type="text" 
                placeholder="Email" />
                {/* error handling */}
              { this.state.emailValidation === 'error' ? 
                <Tooltip placement="bottom" className="in" id="tooltip-bottom">Email not found</Tooltip> : null }
              <FormControl.Feedback/>
            </FormGroup>{' '}
            <FormGroup validationState={this.state.passwordValidation}>
              <FormControl
                value={ this.state.password }
                onChange={ (e) => this.setState({ password: e.target.value, passwordValidation: null }) }  
                type="text" 
                placeholder="Password" />
                {/* error handling */}
              { this.state.passwordValidation === 'error' ? 
                <Tooltip placement="bottom" className="in" id="tooltip-bottom">Incorrect password</Tooltip> : null }
              <FormControl.Feedback/>
            </FormGroup>{' '}
            <Button
              onClick={ () => this.login() }
              type='submit'>Login</Button>
            <Button
              onClick={ () => this.setState({ showLogin: false })} 
              bsStyle='link'>Cancel</Button>
          </Navbar.Form>
          : 
          <Nav pullRight>
            <NavItem onClick={() => this.setState({ showLogin: true })}>Login</NavItem>
          </Nav>
          }
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Header);