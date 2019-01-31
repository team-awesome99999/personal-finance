import React, { Component } from 'react';
import NewUser from '../NewUser/NewUser';
import Header from '../Header';
import Graphs from '../Graphs/Graphs.js';

class HomePage extends Component {
  render() {
    return (
      <div>
        <NewUser />
        <Header/>
        <Graphs />
      </div>
    );
  }
}

export default HomePage;