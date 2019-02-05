import React, { Component } from 'react';
import axios from 'axios';
import { changes } from '../../Tests/monthly_change';
import moment from 'moment';
import currencyFormatter from 'currency-formatter';

class MonthlyChanges extends Component {

  state = {
    balanceChange: ''
  }

  componentDidMount() {
    this.getMonthlyBalances();
  }

  getMonthlyBalances = async () => {
    let changeDates = { };
    let res = await axios.get(`/getmonthlybalances/${this.props.accountid}`);

    // TODO: Test below this line - can move into its own function
    let currentMonth = res.data[0].entrydate;
    var d = new Date(currentMonth);
    let previousMonth = moment(d).subtract(30, 'days').format();
    for(let i=0; i<res.data.length; i++) {
      if(res.data[i].entrydate === currentMonth) {
        changeDates.thisMonth = res.data[i].balance;
      } else if (moment(res.data[i].entrydate).isSameOrBefore(previousMonth)) {
        changeDates.lastMonth = res.data[i].balance;
        break;
      }
    }
    //Test above this line
    let result = changes(changeDates);
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