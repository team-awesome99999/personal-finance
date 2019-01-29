import React, { Component } from 'react'
import axios from 'axios'
import AccountComponent from './AccountComponent'

export default class AccountList extends Component {
    state = {
        accountinfo: [{
            name: "Steve Erwin",
            currentTotal: 2949345,
            history: [1,2,3,4,5,6,6,7,8,9]
        },{name: "Luke Skywalker", currentTotal: 900000, history: [90000, 57685, 200, 6]}],
        switch: true
    }
    componentDidMount() {
        axios.get('/accounts').then((res) => {
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
                currentTotal={account.currentTotal}
                history={account.history}
            />)
        })
        return (
            <div>
                <div className="accountbox">
                    {accounts}
                </div>
            </div>
        )
    }
}
