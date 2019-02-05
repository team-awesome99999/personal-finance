import React, { Component } from 'react';
import { Navbar, Button, FormGroup, FormControl, Tooltip } from 'react-bootstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { getCurrentUser } from '../../dux/reducer';
import { connect } from 'react-redux'; 

class Login extends Component {

  state = {
    email: '',
    password: '',
    emailValidation: null,
    passwordValidation: null
  }

  login = async () => {
    const { email, password } = this.state;
    try {
      let res = await axios.post('/auth/login', { email, password })
      console.log(res.data.id)
      this.setState({
        email: '',
        password: ''
      })
      this.props.getCurrentUser({ userid: res.data.id })
      //ONCE HOME PAGE IS BUILT, THE LOGIN CAN PUSH USER THERE WITH COMMENT BELOW
      this.props.history.push('/home');
    } catch(error) {
      if(error.response.data.message === 'Email not found') {
        this.setState({ emailValidation: 'error' })
      } else if(error.response.data.message === 'Incorrect Password') {
        this.setState({ passwordValidation: 'error' })
      }
    }
  }

  render() {
    return (
      <div>
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
              type="password"
              onKeyUp={event => {
                if (event.key === 'Enter') {
                  this.login()
                }
              }} 
              placeholder="Password" />
              {/* error handling */}
            { this.state.passwordValidation === 'error' ? 
              <Tooltip placement="bottom" className="in" id="tooltip-bottom">Incorrect password</Tooltip> : null }
            <FormControl.Feedback/>
          </FormGroup>{' '}
          <Button
            className='btn2' 
            onClick={ () => this.login() }
            type='submit'>Login</Button>
          <Button
            onClick={ () => this.props.showLoginFn() } 
            bsStyle='link'>Cancel</Button>
        </Navbar.Form>
      </div>
    );
  }
}

export default withRouter(connect(null, { getCurrentUser })(Login));