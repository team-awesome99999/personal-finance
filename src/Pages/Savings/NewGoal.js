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

  newSavingsGoal = async () => { //add savings account to backend
    let { goalName, currentSaved, savingsGoal, endDate } = this.state
    let res = await axios.post(`/api/newsavings`, { goalName, currentSaved, savingsGoal, endDate })
    this.props.getGoals(res.data);
    if(this.props.displayNewGoal) {
    this.props.displayNewGoal();
    } 
    this.setState({
      goalName: '',
      currentSaved: null,
      savingsGoal: null,
      endDate: ''
    })
  }

  render() {
    return (
      <div className='calc-box'>
        <div className='newgoal-parent'>
          <input className='debt-inputs' placeholder='Goal Name' type="text" onChange={(e) => this.setState({ goalName: e.target.value })} />
          <input className='debt-inputs' placeholder='Savings Goal($)' type="number" onChange={(e) => this.setState({ savingsGoal: e.target.value })} />
          <input className='debt-inputs' placeholder='Amount Currently Saved($)' type="number" onChange={(e) => this.setState({ currentSaved: e.target.value })} />
          <div className='newgoal-flex'>
            <div className='enddate'>Save by: </div>
            <input className='debt-inputs' placeholder='End Date' type="date" onChange={(e) => this.setState({ endDate: e.target.value })} />
          </div>
          <button className='debt-btn' onClick={() => this.newSavingsGoal()}>Add Goal</button>
        </div>
      </div>
    )
  }
}

export default NewGoal;