import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './NewUser.css'
import { withRouter } from 'react-router-dom';

class AddAccount extends Component {
  state = {
    accountName: '',
    currentBalance: '',
    validateName: null,
    validateBalance: null,
    openForm: false
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
    this.props.history.push('/accounts')
  }

  render() {
    return (
      <div className='new-account'>
        <button onClick={ () => this.setState({ openForm: !this.state.openForm }) } className="new-account-icon"><i className="fas fa-plus"></i></button>
        { !this.state.openForm ? 
        <div className='new-account-closed'>
          <h4>Add New Account</h4>
        </div>
        :
        <div className='new-account-form'>
          <h4>Add New Account</h4>
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
                placeholder="Current Balance"
                type="number"
                />
              <FormControl.Feedback/>
            </FormGroup>{' '}
            <Button className='newaccountbutton' onClick={ () => this.addAccount() }>Save</Button>
          </Form>
        </div>
        }
      </div>
    );
  }
}

export default withRouter(AddAccount);