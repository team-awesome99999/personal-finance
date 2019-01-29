import React, { Component } from 'react'
import axios from 'axios'
import AccountComponent from './AccountComponent'
import Header from '../Header';

export default class AccountList extends Component {
    state = {
        accountinfo: [],
        switch: true
    }
    componentDidMount() {
        axios.get('/accounts').then((res) => {
            console.log(res.data)
            this.setState({
                accountinfo: res.data
            })
        })
    }
    
    render() {
        console.log(this.state.accountinfo)
        let accounts = this.state.accountinfo.map((account) => {
            return(<AccountComponent 
                name={account.name}
                currentTotal={account.balance}
                date={account.entrydate}
                history={account.history}
            />)
        })
        return (
            <div>
                <Header/>
                <div className="accountbox">
                <h1>Your accounts</h1>
                    {accounts}
                </div>
            </div>
        )
    }
}
