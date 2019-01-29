import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

class AddBalance extends Component {
  //will recieve props from AccountList//
  state = {
    newBalance: '',
    date: ''
  }

  addBalance = async(accountid) => {
    const { newBalance, date } = this.state;
    let res = await axios.post('/api/newbalance', { accountid, newBalance, date } );
    console.log(res.data);
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
          {/* pass in props {this.props.accountId} to this function */}
          <Button onClick={ ()=>this.addBalance() }>Submit</Button>
        </FormGroup>{' '}
      </div>
    );
  }
}

export default AddBalance;