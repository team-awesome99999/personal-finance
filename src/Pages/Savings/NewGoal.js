// is imported into Card.js
import React, { Component } from 'react';
import axios from 'axios';

class NewGoal extends Component {
  state = {
    goalName: '',
    currentSaved: null,
    savingsGoal: null,
    endDate: ''
  }

  newSavingsGoal = () => { //add savings account to backend
    let { goalName, currentSaved, savingsGoal, endDate } = this.state
    axios.post(`/api/newsavings`, { goalName, currentSaved, savingsGoal, endDate })
      .then(res => {
        this.props.getSavingsGoals(res.data);
      })
  }

  render() {
    return (
      <div className='newgoal-parent'>
        <input className='debt-inputs' placeholder='Goal Name' type="text" onChange={(e) => this.setState({ goalName: e.target.value })} />
        <input className='debt-inputs' placeholder='Savings Goal($)' type="number" onChange={(e) => this.setState({ savingsGoal: e.target.value })} />
        <input className='debt-inputs' placeholder='Amount Currently Saved($)' type="number" onChange={(e) => this.setState({ currentSaved: e.target.value })} />
        <div className='newgoal-flex'>
          <div className='enddate'>Desired end date: </div>
          <input className='debt-inputs' placeholder='End Date' type="date" onChange={(e) => this.setState({ endDate: e.target.value })} />
        </div>
        <button className='debt-btn' onClick={() => this.newSavingsGoal()}>Add Goal</button>
      </div>
    )
  }
}

export default NewGoal