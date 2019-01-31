import React, { Component } from 'react';
import AddAccount from './AddAccount';
import { Link } from 'react-router-dom'

class NewUser extends Component {
  
  render() {
    return (
      <div>
        <AddAccount />
        <Link to="/accounts">Next</Link>
      </div>
    );
  }
}

export default NewUser;