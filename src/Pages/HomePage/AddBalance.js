//will recieve props (account id being added to) from AccountList

import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

class AddBalance extends Component {
  state = {
    newBalance: '',
    date: ''
  }

  addBalance = async(accountid) => {
    const { newBalance, date } = this.state;
    let res = await axios.post('/api/newbalance', { accountid, newBalance, date } );
    //res.data returns an object with an array of all of the balances for this particular account
    this.setState({
      newBalance: '',
      date: ''
    })
  }

  render() {
    return (
      <div>
        <FormGroup validationState={this.state.validateFirst}>
          <FormControl 
            autoFocus
            onChange={ (e) => this.setState({ newBalance: e.target.value }) }
            value={this.state.newBalance}
            placeholder="New Balance"
            />
          <FormControl.Feedback/>
        </FormGroup>{' '}
        <FormGroup validationState={this.state.validateFirst}>
          <FormControl
            type='date'
            onChange={ (e) => this.setState({ date: e.target.value }) }
            value={this.state.date}
            placeholder="Date of new balance"
            />
          <FormControl.Feedback/>
          <Button onClick={ ()=>this.addBalance(this.props.accountid) }>Submit</Button>
        </FormGroup>{' '}
      </div>
    );
  }
}

export default AddBalance;