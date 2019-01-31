import React, { Component } from 'react'
import './AccountList.css'
import AddBalance from '../HomePage/AddBalance';
import moment from 'moment'
import EditButton from '../AccountList/EditButton';
import DeleteBalance from './DeleteBalance'
import DeleteAccount from './DeleteAccount'

export default class AccountComponent extends Component {
    state = {
        switch: true
    }
    switch() {
        this.setState({
            switch: !this.state.switch
        })
    }


    render() {
        let { balances } = this.props
        let newBalances = [...balances]
        let currentBalance = newBalances.shift()
        let history = balances.map((balance, index) => {
            return (
                <div key={balance.id} className="accounthistory">
                    <div className="historydisplay" key={index + balance}>
                        <h2 className="dateTime">{moment(balance.entrydate).subtract(6, 'days').calendar()}</h2>
                        <h2 className="historyBalance">${balance.balance}</h2>
                        <div className="iconbuttons">
                            <EditButton
                                balanceid={balance.id}
                                date={balance.entrydate}
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
                    <h2 className="accountName">{this.props.name}</h2>
                    <h2 className="accountBalance">{currentBalance ? `$ ${currentBalance.balance}` : null}</h2>
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