import React, { Component } from 'react';
import axios from 'axios';
import Calculator from '../Calculator/Calculator';
import SubHeader from './SubHeader';
import Header from '../Header';
import './Savings.css';
import SavingsItem from './SavingsItem';
import NewGoal from './NewGoal.js';
import Plans from '../Plans/Plans'

class Savings extends Component {
  state = {
    total: null,
    current: null,
    openCalculator: false,
    newGoalDisplay: false,
    goalInfo: [],
  }

  componentDidMount() { //get savings account for the session user
    axios.get(`/api/savings`)
      .then(res => {
        this.setState({ goalInfo: res.data })
    })
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state.savingsAccounts) {
      axios.get(`/api/savings`)
        .then(res => {
          this.setState({ savingsAccounts: res.data })
        })
    }
  }

  async editSavingsGoal() { //allows user to modify their current savings amount
    await axios.put()
      .then()
  }

  async deleteSavingsGoal() { //allows end user to delete the current savings goal
    axios.delete()
      .then()
  }

  openCalculator = () => {
    this.setState({ openCalculator: !this.state.openCalculator })
  }

  displayNewGoal = () => {
    this.setState({ newGoalDisplay: !this.state.newGoalDisplay })
  }

  getSavingsGoals = (data) => {
    this.setState({ savingsAccounts: data });
  }

  render() {
    return ( 
      <div>
        <Header />
        <SubHeader openCalculator={this.openCalculator} displayNewGoal={this.displayNewGoal} />
{/* ----- Dropdowns from subheader */}
        {this.state.openCalculator ?
          <Calculator />
          : null}
        {this.state.newGoalDisplay ? <NewGoal getSavingsGoals={this.getSavingsGoals} displayNewGoal={this.displayNewGoal} /> : null}
{/* ----- Dropdowns from subheader */}
        <div className='options'>
          <span className='option-detail'>Edit options</span>
          <span>Delete options</span>
        </div>
        <div className='savings-parent'>
          <div className='savings-wrapper'>
            <Plans goalInfo={ this.state.goalInfo }/>
          </div>
        </div>
      </div>
    )
  }
}
export default Savings;