import React, { Component } from 'react';
import NewUser from '../NewUser/NewUser';
import AddBalance from '../HomePage/AddBalance';

class HomePage extends Component {
  render() {
    return (
      <div>
        <NewUser />
        <AddBalance/>
      </div>
    );
  }
}

export default HomePage;