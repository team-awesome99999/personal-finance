import React, { Component } from 'react';
import {accountTotal, accountBalance} from './../../Tests/chartTotal'

class Totals extends Component {
    constructor(){
        super()

        this.state={
            total: this.props.total
        }
    }
    render() {
        return (
            <div>
                {this.state.total}
            </div>
        );
    }
}

export default Totals;