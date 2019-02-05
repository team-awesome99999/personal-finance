import React, { Component } from 'react';
import axios from 'axios';
import { changes, makeDateObj } from '../../Tests/monthly_change';
import currencyFormatter from 'currency-formatter';

class MonthlyChanges extends Component {

  state = {
    balanceChange: ''
  }

  componentDidMount() {
    this.getMonthlyBalances();
  }

  getMonthlyBalances = async () => {
    let res = await axios.get(`/getmonthlybalances/${this.props.accountid}`);
    //see monthly_change.js for functions below
    let dateObj = makeDateObj(res.data)
    let result = changes(dateObj);
    this.setState({ balanceChange: result });
  }
  
  render() {
    return (
      <div className='monthly-changes'>
        Balance change in last month: {currencyFormatter.format(this.state.balanceChange, { locale: 'en-US' })}
      </div>
    );
  }
}

export default MonthlyChanges;