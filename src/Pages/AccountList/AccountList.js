import React, { Component } from 'react'
import axios from 'axios'
import AccountComponent from './AccountComponent'
import Header from '../Header';
import DeleteAccount from '../AccountList/DeleteAccount';

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
  componentDidUpdate(){
    axios.get(`/accounts`)
         .then(res=>{
           this.setState({
             acconts: res.data.accounts,
             balances: res.data.balances
           })
         })
  }

  render() {

    let accounts = this.state.accounts.map((account, index) => {
      let balances = this.state.balances.filter((balance) => {
        if (balance.accountid === account.id) {
          return true
        } else {
          return false
        }
      })
      return (
        <div key={index + account.id}>
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
        <div className="all-accounts">
          <h1>Your accounts</h1>
          {accounts}
        </div>
      </div>
    )
  }
}


// SELECT * FROM balances
// WHERE accountid = $1