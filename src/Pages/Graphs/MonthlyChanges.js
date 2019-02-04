import React, { Component } from 'react';
import axios from 'axios';
import { changes } from '../../Tests/monthly_change';
import moment from 'moment';

class MonthlyChanges extends Component {

  state = {
    balanceChange: ''
  }

  componentDidMount() {
    this.getMonthlyBalances();
  }

  getMonthlyBalances = async () => {
    let changeDates = {  };
    let res = await axios.get(`/getmonthlybalances/${this.props.accountid}`);
    let firstDate = res.data[0].entrydate;
    var d = new Date(firstDate);
    let lastDate = moment(d.setDate(30)).format();
    for(let i=0; i<res.data.length; i++) {
      console.log(res.data[i], firstDate)
      if(res.data[i].entrydate === firstDate) {
        changeDates.firstMonth = res.data[i].balance;
      } else if(res.data[i].entrydate === lastDate) {
        changeDates.lastMonth = res.data[i].balance;
      } else if (Date.parse(res.data[i].entrydate) > Date.parse(lastDate)) {
        console.log('true')
        changeDates.lastMonth = res.data[i].balance;
        return;
      }
    }
    console.log("change dates", changeDates)
    console.log("Balance change data", res.data, "firstDate", firstDate, "lastDate", lastDate);
    // let result = changes(res.data);
    // console.log(result);

    // this.setState({ balanceChange: result });
  }
  
  render() {
    return (
      <div>
        Balance change since last month: {this.state.balanceChange}
      </div>
    );
  }
}

export default MonthlyChanges;