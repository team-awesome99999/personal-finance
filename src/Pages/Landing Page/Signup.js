import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, FormControl, HelpBlock, Tooltip, InputGroup, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { getCurrentUser } from '../../dux/reducer';
import { connect } from 'react-redux'; 

class Signup extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    fieldsRequired: false,
    validateEmail: null,
    validateFirst: null,
    validateLast: null,
    validatePass: null
  }

  signup = async () => {
    const { firstname, lastname, email, password } = this.state;
    if(firstname.length === 0 || lastname.length === 0 || email.length === 0 || password.length === 0) {
      return this.setState({ 
        fieldsRequired: true
      })
    }
    try {
      await axios.post('/auth/signup', { firstname, lastname, email, password })
      this.setState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      })
      this.props.history.push('/home');
    } catch(error) {
      if(error.response.data.message === 'Email already exists') {
        this.setState({ validateEmail: 'error'})
      } else {
        this.setState({ 
          validateEmail: 'error',
          validateFirst: 'error',
          validateLast: 'error',
          validatePass: 'error'
         })
      }
    }
  }

  render() {
    return (
      //validation not currently working, TO DO
      <div className='signup-box'>
        <FormGroup validationState={this.state.validateFirst}>
          <FormControl 
            autoFocus
            onChange={ (e) => this.setState({ firstname: e.target.value, fieldsRequired: false, validateFirst: null}) }
            value={this.state.firstname}
            placeholder="First Name"
            />
            <FormControl.Feedback/>
        </FormGroup>{' '}
        <FormGroup validationState={this.state.validateLast}>
          <FormControl
            onChange={ (e) => this.setState({ lastname: e.target.value, fieldsRequired: false, validateLast: null}) }
            value={this.state.lastname}
            placeholder="Last Name"
            />
            <FormControl.Feedback/>
        </FormGroup>{' '}
        <FormGroup validationState={this.state.validateEmail}>
          <FormControl
            value={ this.state.email }
            onChange={ (e) => this.setState({ email: e.target.value, fieldsRequired: false, emailError: null, validateEmail: null}) } 
            type="text" 
            placeholder="Email" />
          {/* error handling */}
          { this.state.validateEmail === 'error' ? 
            <Tooltip placement="bottom" className="in" id="tooltip-bottom">Email already taken!</Tooltip> : null }
          <FormControl.Feedback/>
        </FormGroup>{' '}
        <FormGroup validationState={this.state.validatePass}>
          <FormControl
            type='password'
            onChange={ (e) => this.setState({ password: e.target.value, fieldsRequired: false, validatePass: null}) }
            value={this.state.password}
            placeholder="Password"
            onKeyUp={event => {
              if (event.key === 'Enter') {
                this.signup()
              }
            }}
            />
            <FormControl.Feedback/>
        </FormGroup>{' '}
        <button className='register-btn btn btn-primary' onClick={ () => this.signup() }>Register</button>
      </div>
    );
  }
}

export default withRouter(connect(null, {getCurrentUser})(Signup));