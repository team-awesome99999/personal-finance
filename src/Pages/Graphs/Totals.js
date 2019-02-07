import React, { Component } from 'react';
import {accountTotal, accountBalance} from './../../Tests/chartTotal'

class Totals extends Component {
    constructor(props){
        super(props)

        this.state={
            total: this.props.total
        }

    }
    render() {
        console.log(this.props.total)

        // let theRealTotal = accountTotal(this.props.total)
        return (
            <div>
                {this.props.total.length ? <h1>{accountTotal(this.props.total)}</h1> : <h1>LOADING</h1>}
            </div>
        );
    }
}

export default Totals;