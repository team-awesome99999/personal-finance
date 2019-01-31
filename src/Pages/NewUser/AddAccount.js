import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, FormControl } from 'react-bootstrap';

class AddAccount extends Component {
  state = {
    accountName: '',
    currentBalance: '',
    validateName: null,
    validateBalance: null
  }

  addAccount = async() => {
    const { accountName, currentBalance } = this.state;
    if(accountName.length === 0) {
      return this.setState({ validateName: 'error' })
    } else if(currentBalance.length === 0) {
      return this.setState({ validateBalance: 'error' })
    }
    await axios.post('/api/newaccount', { name: accountName, currentBalance: currentBalance });
    this.setState({
      accountName: '',
      currentBalance: ''
    })
  }

  render() {
    return (
      <div className='new-account-form'>
        <p>Add New Account</p>
        <Form>
          <FormGroup validationState={this.state.validateName}>
            <FormControl 
              autoFocus
              onChange={ (e) => this.setState({ accountName: e.target.value, validateName: null })}
              value={this.state.accountName}
              placeholder="New Account Name"
              type="text"
              />
              <FormControl.Feedback/>
          </FormGroup>{' '}
          <FormGroup validationState={this.state.validateBalance}>
            <FormControl 
              onChange={ (e) => this.setState({ currentBalance: e.target.value, validateBalance: null })}
              value={this.state.currentBalance}
              placeholder="Current Account Balance"
              type="number"
              />
            <FormControl.Feedback/>
          </FormGroup>{' '}
          <button onClick={ () => this.addAccount() }>Save</button>
        </Form>
      </div>
    );
  }
}

export default AddAccount;