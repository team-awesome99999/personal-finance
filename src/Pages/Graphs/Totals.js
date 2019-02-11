import React, { Component } from 'react';
import { accountTotal } from './../../Tests/chartTotal'
import currencyFormatter from 'currency-formatter'

class Totals extends Component {
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
        {this.props.total.length ? <h1 className="grandTotalMasterOfSecrets">{currencyFormatter.format(accountTotal(this.props.total), { code: 'USD' })}</h1> : <h1>LOADING</h1>}
      </div>
    );
  }
}

export default Totals;