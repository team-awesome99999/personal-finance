//will recieve props (account id being added to) from AccountList

import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';

class AddBalance extends Component {
  state = {
    newBalance: '',
    date: moment(new Date()).format('YYYY-MM-DD'),
    validateBalance: null,
    validateDate: null
  }
  addBalance = async (accountid) => {
    const { newBalance, date } = this.state;
    //error handling (will not let user submit with empty inputs)
    if(newBalance.length === 0) {
      return this.setState({ validateBalance: 'error' })
    } else if(date.length === 0) {
      return this.setState({ validateDate: 'error' })
    }
    await axios.post('/api/newbalance', { accountid, newBalance, date });
    //res.data returns an object with an array of all of the balances for this particular account
    this.setState({
      newBalance: '',
      date: ''
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.newBalance !== this.state.newBalance) {
      this.props.accountDataFn();
    }
  }

  render() {
    return (
      <Form inline>
        <FormGroup validationState={this.state.validateBalance}>
          <FormControl
            autoFocus
            onChange={(e) => this.setState({ newBalance: e.target.value, validateBalance: null })}
            value={this.state.newBalance}
            placeholder="New Balance"
            className="newbalanceinput"
            />
          <FormControl.Feedback />
        </FormGroup>{' '}
        <FormGroup validationState={this.state.validateDate}>
          <FormControl
            type='date'
            onChange={(e) => this.setState({ date: e.target.value, validateDate: null })}
            value={this.state.date}
            placeholder="Date of new balance"
            className="newbalanceinput"
          />
          <FormControl.Feedback />
        </FormGroup>{' '}
        <Button className='bal-btn btn btn-success' onClick={() => this.addBalance(this.props.accountid)}>Add</Button>
      </Form>
    );
  }
}

export default AddBalance;