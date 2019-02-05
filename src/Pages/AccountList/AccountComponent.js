import React, { Component } from 'react'
import './AccountList.css'
import AddBalance from '../HomePage/AddBalance';
import moment from 'moment'
import EditButton from '../AccountList/EditButton';
import DeleteBalance from './DeleteBalance'
import DeleteAccount from './DeleteAccount'
import currencyFormatter from 'currency-formatter'
import axios from 'axios';
import { Tooltip, ButtonToolbar, OverlayTrigger } from 'react-bootstrap';

export default class AccountComponent extends Component {
    state = {
        switch: true,
        editName: false,
        newName: ''
    }

    switch() {
        this.setState({
            switch: !this.state.switch
        })
    }

    saveNameChange = async () => {
      console.log('running?')
      await axios.put('/api/editname', { name: this.state.newName, accountid: this.props.accountid })
      this.setState({ editName: false, newName: '' })
    }


    render() {
        let { balances } = this.props
        let newBalances = [...balances]
        let currentBalance = newBalances.shift()
        let history = balances.map((balance, index) => {
            return (
                <div key={balance.id} className="accounthistory">
                    <div className="historydisplay" key={index + balance}>
                        <h2 className="dateTime">{moment(balance.entrydate).format('l')}</h2>
                        <h2 className="historyBalance">{currencyFormatter.format(balance.balance, {code: 'USD'})}</h2>
                        <div className="iconbuttons">
                            <EditButton
                                balanceid={balance.id}
                                date={moment(balance.entrydate).format('l')}
                                balance={balance.balance} />
                            <DeleteBalance
                                balanceid={balance.id}
                            />
                        </div>
                    </div>
                </div>
            )
        })


        return (
            <div className="everyAccount">
                <div className="account">
                    { !this.state.editName ?
                      <ButtonToolbar>
                          <OverlayTrigger
                            placement="left"
                            overlay={
                              <Tooltip>
                                Click to edit!
                              </Tooltip>
                            }
                          >
                            <h2 onClick={ () => this.setState({ editName: !this.state.editName }) } className="accountName">{this.props.name}</h2>
                          </OverlayTrigger>
                      </ButtonToolbar>
                    :
                    <div>
                      <input
                        onChange={ (e) => this.setState({ newName: e.target.value }) } 
                        type="text" 
                        value={this.props.newName}/>
                      <span className='savename' onClick={ () => this.saveNameChange() }>Save  </span>
                      <span className='savename' onClick={ () => this.setState({ editName: false}) }>Cancel</span>
                    </div>
                    }
                    <h2 className="accountBalance">{currentBalance ? `${currencyFormatter.format(currentBalance.balance, {code: 'USD'})}` : null}</h2>
                </div>
                <DeleteAccount accountid={this.props.accountid} />
                <div className={this.state.switch ? "history notvisible" : "history"}>
                    <h3 className={this.state.switch ? "history hidden" : "history details numbers"} >{history}</h3>
                    <div className={this.state.switch ? "history hidden" : "history details"}>
                        <AddBalance accountid={this.props.accountid} />
                    </div>
                </div>
                <div onClick={() => this.switch()} className="circle">
                    <i className={this.state.switch ? "iconx fas fa-plus" : "fas fa-plus iconx iconactive"}></i>
                </div>
            </div>
        )
    }
}