import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class NewUser extends Component {
  state = {
    accountName: '',
    currentBalance: ''
  }

  addAccount = async() => {
    const { accountName, currentBalance } = this.state;
    let res = await axios.post('/api/newaccount', { userid: this.props.userid, name: accountName, currentBalance: currentBalance });
    console.log(res.data);
  }

  render() {
    return (
      <div>
        <input
          onChange={ (e) => this.setState({ accountName: e.target.value })}
          placeholder="Account Name" 
          type="text"/>
        <input 
          onChange={ (e) => this.setState({ currentBalance: e.target.value })}
          placeholder="Current Balance"
          type="number"/>
        <button onClick={ () => this.addAccount() }>Add New Account</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userid: state.userid
  }
}

export default connect(mapStateToProps)(NewUser);