import React, { Component } from 'react';
import axios from 'axios';
import Calculator from '../Calculator/Calculator';
import SubHeader from './SubHeader';
import Header from '../Header';
import './Savings.css';
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
    this.getGoals();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.goalInfo.length !== this.state.goalInfo.length) {
      let res = await axios.get(`/api/savings`);
      this.setState({ goalInfo: res.data })
    }
  }

  getGoals = async () => {
    try {
    let res = await axios.get(`/api/savings`)
    this.setState({ goalInfo: res.data })
    } catch(error) {
      console.log(error);
    }
  }

  async editSavingsGoal() { //allows user to modify their current savings amount
    await axios.put()
      .then()
  }

  deleteGoal = async (id) => { //allows end user to delete the current savings goal
    let res = await axios.delete(`/deletegoal/${id}`);
    if(res.data) {
      this.setState({ goalInfo: res.data })
    }
  }

  openCalculator = () => {
    this.setState({ openCalculator: !this.state.openCalculator })
  }

  displayNewGoal = () => {
    this.setState({ newGoalDisplay: !this.state.newGoalDisplay })
  }

  // getSavingsGoals = (data) => {
  //   this.setState({ savingsAccounts: data });
  // }

  render() {
    return ( 
      <div>
        <Header />
        <SubHeader openCalculator={this.openCalculator} displayNewGoal={this.displayNewGoal} />
{/* ----- Dropdowns from subheader */}
        {this.state.openCalculator ?
          <Calculator />
          : null}
        {this.state.newGoalDisplay ? <NewGoal getGoals={this.getGoals} displayNewGoal={this.displayNewGoal} /> : null}
{/* ----- Dropdowns from subheader */}

        <div className='options'>
          <span className='option-detail'>Edit options</span>
          <span onClick={ () => this.setState({ deleteOptions: !this.state.deleteOptions }) }>Delete options</span>
        </div>
        <div className='savings-parent'>
          <div className='savings-wrapper'>
            <Plans goalInfo={ this.state.goalInfo } deleteOptions={ this.state.deleteOptions } deleteGoal={ this.deleteGoal }/>
          </div>
        </div>
      </div>
    )
  }
}
export default Savings;