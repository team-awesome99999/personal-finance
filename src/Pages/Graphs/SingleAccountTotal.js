import React, { Component } from 'react';
import { accountTotal, accountBalance } from './../../Tests/chartTotal'

class SingleAccountTotal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      total: this.props.total
    }

  }
  render() {

    // let theRealTotal = accountTotal(this.props.total)
    return (
      <div>
        {this.props.total.length ? <h1>{accountBalance(this.props.total)}</h1> : <h1>LOADING</h1>}
      </div>
    );
  }
}

export default SingleAccountTotal;