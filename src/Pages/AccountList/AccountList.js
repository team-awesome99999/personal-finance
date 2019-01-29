import React, { Component } from 'react'
import axios from 'axios'
import AccountComponent from './AccountComponent'
import Header from '../Header';

export default class AccountList extends Component {
  state = {
    accounts: [],
    balances: [],
    switch: true
  }
  componentDidMount() {
    axios.get('/accounts').then((res) => {
      this.setState({
        accounts: res.data.accounts,
        balances: res.data.balances
      })
    })
  }

  render() {

    let accounts = this.state.accounts.map((account) => {
      let balances = this.state.balances.filter((balance) => {
        if (balance.accountid === account.id) {
          return true
        } else {
          return false
        }
      })
      return (
        <div>
          <p>{account.balance}</p>
          <AccountComponent
            name={account.name}
            accountid={account.id}
            balances={balances}
          />

        </div>
      )
    })
    return (
      <div>
        <Header />
        <div className="accountbox">
          <h1>Your accounts</h1>
          {accounts}
        </div>
      </div>
    )
  }
}


// SELECT * FROM balances
// WHERE accountid = $1