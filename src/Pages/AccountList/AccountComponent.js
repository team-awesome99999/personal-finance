import React, { Component } from 'react'
import './AccountList.css'
import littleicon from './../../_ionicons_svg_ios-close-circle-outline.svg'
import AddBalance from '../HomePage/AddBalance';
import moment from 'moment'

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
                <div className="accounthistory">
                    <div className="historydisplay" key={index + balance}>
                        <h2>{moment(balance.entrydate).subtract(6, 'days').calendar()}</h2>
                        <h2>${balance.balance}</h2>
                    </div>
                </div>
            )

        })
        console.log(history)


        return (
            <div className="all-accounts">
                <div className="account">
                    <h2>{this.props.name}</h2>
                    <h2>${currentBalance.balance}</h2>
                </div>
                <div className={this.state.switch ? "history notvisible" : "history"}>
                    <h3 className={this.state.switch ? "history hidden" : "history"} >{history}</h3>
                    <div className={this.state.switch ? "history hidden" : "history"}>
                    <AddBalance accountid={this.props.accountid} />
                    </div>
                </div>
                <img src={littleicon} onClick={() => this.switch()} className={this.state.switch ? "iconx" : "iconx iconactive"} ></img>
            </div>
        )
    }
}