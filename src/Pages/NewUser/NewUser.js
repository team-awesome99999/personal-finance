import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class NewUser extends Component {
  state = {
    accountName: '',
    currentBalance: ''
  }

  addAccount = async() => {
    const { accountName, currentBalance } = this.state;
    let res = await axios.post('/api/newaccount', { name: accountName, currentBalance: currentBalance });
  }

  render() {
    return (
      <div>
        <h3>{this.props.userid ? "Welcome " + this.props.firstname + "!" : "Welcome!"}</h3>
        <input
          onChange={ (e) => this.setState({ accountName: e.target.value })}
          placeholder="Account Name" 
          type="text"/>
        <input 
          onChange={ (e) => this.setState({ currentBalance: e.target.value })}
          placeholder="Current Balance"
          type="number"/>
        <button onClick={ () => this.addAccount() }>Add New Account</button>
        <Link to="/accounts">Next</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    firstname: state.firstname
  }
}

export default connect(mapStateToProps)(NewUser);