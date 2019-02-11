import React, { Component } from 'react'
import './AccountList.css'
import AddBalance from '../HomePage/AddBalance';
import DeleteAccount from './DeleteAccount'
import currencyFormatter from 'currency-formatter'
import axios from 'axios';
import { Tooltip, ButtonToolbar, OverlayTrigger } from 'react-bootstrap';
import BalanceComponent from './BalanceComponent';
import GraphModal from './GraphModal';

export default class AccountComponent extends Component {
  state = {
    switch: true,
    editName: false,
    newName: '',
    editing: false,
    date: '',
    balance: '',
    modalShow: false,
    accounts: [],
    balances: []
  }

  componentDidMount = async () => {
    axios.get(`/accounts`)
      .then(res => {
        this.setState({ accounts: res.data.accounts, balances: res.data.balances })
      })
  }

  switch = () => {
    this.setState({
      switch: !this.state.switch
    })
  }

  saveNameChange = async () => {
    await axios.put('/api/editname', { name: this.state.newName, accountid: this.props.accountid })
    this.setState({ editName: false, newName: '' })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.editName !== this.state.editName) {
      this.props.accountDataFn();
    }
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    let { balances } = this.props
    let newBalances = [...balances]
    let currentBalance = newBalances.shift()
    let history = balances.map((balance, index) => {
      return (
        <BalanceComponent
          key={balance.id}
          entrydate={balance.entrydate}
          balance={balance.balance}
          balanceid={balance.id}
          index={index}
          accountid={ balance.accountid }
          accountDataFn={ this.props.accountDataFn }
        />
      )
    })

    return (
      <div className="everyAccount">
        <div className="account">
          {!this.state.editName ?
            <ButtonToolbar>
              <OverlayTrigger
                placement="left"
                overlay={
                  <Tooltip id='tooltip'>
                    Click to edit!
                  </Tooltip>
                }
              >
                <h2 onClick={() => this.setState({ editName: !this.state.editName })} className="accountName">{this.props.name}</h2>
              </OverlayTrigger>
            </ButtonToolbar>
            :
            <div>
              <input
                onChange={(e) => this.setState({ newName: e.target.value })}
                type="text"
                value={this.props.newName} />
              <span className='savename' onClick={() => this.saveNameChange()}>Save  </span>
              <span className='savename' onClick={() => this.setState({ editName: false })}>Cancel</span>
            </div>
          }

          {/* Modal to show graphs */}
          <ButtonToolbar>
            <div className='modal-btn' onClick={() => this.setState({ modalShow: true })}>See Graph</div>
            <GraphModal
              show={this.state.modalShow}
              onHide={modalClose}
              accountname={ this.props.name }
              accountid={ this.props.accountid }
              accountsarray={ this.state.accounts }
              balancesarray={ this.state.balances } />
          </ButtonToolbar>

          <h2 className="accountBalance">{currentBalance ? `${currencyFormatter.format(currentBalance.balance, { code: 'USD' })}` : null}</h2>
        </div>
        <DeleteAccount accountid={this.props.accountid} accountDataFn={ this.props.accountDataFn } />
        <div className={this.state.switch ? "history notvisible" : "history"}>
          <h3 className={this.state.switch ? "history hidden" : "history details numbers"} >{history}</h3>
          <div className={this.state.switch ? "history hidden" : "history details"}>
            <AddBalance accountid={this.props.accountid} accountDataFn={ this.props.accountDataFn } />
          </div>
        </div>
        <div onClick={this.switch} className="circle">
          <i className={this.state.switch ? "iconx fas fa-plus" : "fas fa-plus iconx iconactive"}></i>
        </div>
      </div>
    )
  }
}