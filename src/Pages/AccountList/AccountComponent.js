import React, { Component } from 'react'
import './AccountList.css'
import littleicon from './../../_ionicons_svg_ios-close-circle-outline.svg'
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

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state.accountInfo) {
            console.log('updating?')
        }
    }

    render() {
        let { balances } = this.props
        let newBalances = [...balances]
        let currentBalance = newBalances.shift()
        console.log(currentBalance);
        let history = balances.map((balance, index) => {
            return (
                <div key={balance.id} className="accounthistory">
                    <div className="historydisplay" key={index + balance}>
                        <h2>{moment(balance.entrydate).subtract(6, 'days').calendar()}</h2>
                        <h2>${balance.balance}</h2>
                        <EditButton
                            balanceid={balance.id}
                            date={balance.entrydate}
                            balance={balance.balance} />
                        <DeleteBalance
                            balanceid={balance.id}
                        />
                    </div>
                </div>
            )

        })


        return (
            <div className="everyAccount">
                <div className="account">
                    <h2>{this.props.name}</h2>
                    <h2>{currentBalance ? `$ ${currentBalance.balance}` : null}</h2>
                    <DeleteAccount accountid={this.props.accountid}/>
                </div>
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