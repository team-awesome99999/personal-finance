import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';

class AddAccount extends Component {
  state = {
    accountName: '',
    currentBalance: ''
  }

  addAccount = async() => {
    const { accountName, currentBalance } = this.state;
    await axios.post('/api/newaccount', { name: accountName, currentBalance: currentBalance });
  }

  render() {
    return (
      <div>
        Testing
        <Form>
          <Form.Group>
            <Form.Label>Account Name</Form.Label>
            <Form.Control 
              onChange={ (e) => this.setState({ accountName: e.target.value })}
              type="text" />
          </Form.Group>
          {/* <Form.Label>Current Account Balance</Form.Label>
          <Form.Control 
            onChange={ (e) => this.setState({ currentBalance: e.target.value })}
            type="number" /> */}
          <Button onClick={ () => this.addAccount() }>Add New Account</Button>
        </Form>
        <Link to="/accounts">Next</Link>
      </div>
    );
  }
}

export default AddAccount;