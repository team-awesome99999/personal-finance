import React, { Component } from 'react';
import NewUser from '../NewUser/NewUser';
<<<<<<< HEAD
import AddBalance from '../HomePage/AddBalance';
=======
import Header from '../Header';
>>>>>>> 66bf031bbdeaf7ce1498f6803ca28fdbf6d32418

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <NewUser />
        <AddBalance/>
      </div>
    );
  }
}

export default HomePage;