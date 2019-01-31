//will recieve props (account id being added to) from AccountList

import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';

class AddBalance extends Component {
  state = {
    newBalance: '',
    date: moment(new Date()).format('YYYY-MM-DD'),
    switch: true
  }
  addBalance = async (accountid) => {
    const { newBalance, date } = this.state;
    await axios.post('/api/newbalance', { accountid, newBalance, date });
    //res.data returns an object with an array of all of the balances for this particular account
    this.setState({
      newBalance: '',
      date: ''
    })
  }

  render() {
    return (
      <div className={this.state.switch ? "history notvisible" : "history"}>
          <Form inline>
            <FormGroup validationState={this.state.validateFirst}>
              <FormControl
                autoFocus
                onChange={(e) => this.setState({ newBalance: e.target.value })}
                value={this.state.newBalance}
                placeholder="New Balance"
                className="newbalanceinput"
                />
              <FormControl.Feedback />
            </FormGroup>{' '}
            <FormGroup validationState={this.state.validateFirst}>
              <FormControl
                type='date'
                onChange={(e) => this.setState({ date: e.target.value })}
                value={this.state.date}
                placeholder="Date of new balance"
                className="newbalanceinput"
              />
              <FormControl.Feedback />
            </FormGroup>{' '}
            <Button className='btn btn-success' onClick={() => this.addBalance(this.props.accountid)}>Add</Button>
          </Form>
      </div>
    );
  }
}

export default AddBalance;