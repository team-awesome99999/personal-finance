import React, { Component } from 'react';
import axios from 'axios';
import { monthlyChanges } from '../Tests/monthly_changes.js'

class monthly_changes extends Component {

  state = {
    balanceChange: ''
  }

  getMonthlyBalances = async () => {
    let res = await axios.get('/getmonthlybalances')
  }
  
  render() {
    return (
      <div>
        Balance change since last month: {this.state.balanceChange}
      </div>
    );
  }
}

export default monthly_changes;