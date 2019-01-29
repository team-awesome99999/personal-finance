import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }

  signup = async () => {
    const { firstname, lastname, email, password } = this.state;
    await axios.post('/auth/signup', { firstname, lastname, email, password })
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    })
  }
  
  render() {
    return (
      <div>
         <label htmlFor="">First Name</label>
        <input 
          value={this.state.firstname}
          onChange={ (e) => this.setState({ firstname: e.target.value }) }
          type="text"/>
        <label htmlFor="">Last Name</label>
        <input 
          value={this.state.lastname}
          onChange={ (e) => this.setState({ lastname: e.target.value }) }
          type="text"/>
        <label htmlFor="">Email Address</label>
        <input 
          value={this.state.email}
          onChange={ (e) => this.setState({ email: e.target.value }) }
          type="text"/>
        <label htmlFor="">Password</label>
        <input 
          value={this.state.password}
          onChange={ (e) => this.setState({ password: e.target.value }) }
          type="text"/>
        <button onClick={ () => this.signup() }>Register</button>
      </div>
    );
  }
}

export default Signup;