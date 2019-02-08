import React, { Component } from 'react';
import axios from 'axios';
import Calculator from '../Calculator/Calculator';
import SubHeader from './SubHeader';
import Header from '../Header';
import './Savings.css';
import NewGoal from './NewGoal.js';
import Plans from '../Plans/Plans';
import Loading from '../Loading';

class Savings extends Component {
  state = {
    total: null,
    current: null,
    openCalculator: false,
    newGoalDisplay: false,
    goalInfo: [],
    deleteOptions: false,
    editOptions: false,
    show: true,
    loading: true
  }

  componentDidMount() { //get savings account for the session user
    this.getGoals();
    this.setState({ loading: false })
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
      return error;
    }
  }

  async editGoal() { //allows user to modify their current savings amount - is being passed down to Card through Plans
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
    this.setState({ openCalculator: !this.state.openCalculator, newGoalDisplay: false })
  }

  displayNewGoal = () => {
    this.setState({ newGoalDisplay: !this.state.newGoalDisplay, openCalculator: false })
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
        {this.state.newGoalDisplay ? <NewGoal getGoals={this.getGoals} displayNewGoal={this.displayNewGoal} /> : null}
{/* ----- Dropdowns from subheader */}

        <div className='options'>
          <input
            onChange={ () => this.setState({ show: !this.state.show })}
            type='checkbox' 
            /> 
          <span className='option-detail'> Hide completed goals</span>
          <span 
            className={ this.state.editOptions ? 'option-detail op-black' : 'option-detail'}
            onClick={ () => this.setState({ editOptions: !this.state.editOptions, deleteOptions: false })}
            >Edit options</span>
          <span 
            className={ this.state.deleteOptions ? 'option-detail op-black' : 'option-detail'} 
            onClick={ () => this.setState({ deleteOptions: !this.state.deleteOptions, editOptions: false }) }
            >Delete options</span>
        </div>
        <div className='savings-parent'>
        { this.state.loading ? <Loading /> : 
          <div className='savings-wrapper'>
            <Plans
              getGoals={ this.getGoals }
              goalInfo={ this.state.goalInfo } 
              deleteOptions={ this.state.deleteOptions } 
              editOptions={ this.state.editOptions} 
              deleteGoal={ this.deleteGoal } 
              editGoal={ this.editGoal }
              show={ this.state.show } />
          </div> } 
        </div>
      </div>
    )
  }
}
export default Savings;