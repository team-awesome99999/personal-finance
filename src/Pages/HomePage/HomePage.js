import React, { Component } from 'react';
import NewUser from '../NewUser/NewUser';
import Header from '../Header';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <NewUser />
      </div>
    );
  }
}

export default HomePage;