//takes in props from savings component
import React, { Component } from 'react'
import Card from './Card'
import './Plans.css'
import NewGoal from '../Savings/NewGoal';

export default class Plans extends Component {
  state = {
    total: '',
    current: '',
    loading: true
  }
  render() {
    let filteredCards = this.props.goalInfo.map((goal) => {
      if(goal.current_amount !== goal.end_amount) {
        return (
          <Card 
            key={goal.id} 
            goal={goal.end_amount}
            current={goal.current_amount}
            endDate={goal.end_date}
            name={goal.name}
            id={goal.user_id}
            deleteOptions={ this.props.deleteOptions }
            editOptions={ this.props.editOptions }
            goalid={goal.id}
            deleteGoal={ this.props.deleteGoal }
            editGoal={ this.props.editGoal }
            getGoals={ this.props.getGoals }
          />
        )  
      }
    })
    
    let allCards = this.props.goalInfo.map((goal) => {
      return (
        <Card
        key={goal.id}
        goal={goal.end_amount}
        current={goal.current_amount}
        endDate={goal.end_date}
        name={goal.name}
        id={goal.user_id}
        deleteOptions={ this.props.deleteOptions }
        editOptions={ this.props.editOptions }
        goalid={goal.id}
        deleteGoal={ this.props.deleteGoal }
        editGoal={ this.props.editGoal }
        />
        ) 
      })

    return (
      <div>
        <div className='cardwrap'>
          { !filteredCards[0] ?
            <div>
              <h2 className='start-goals start-title'>Add your first goal!</h2>
              <h4 className='start-goals'>Here it's easy to plan for future wants and needs. Fill out the form below to start seeing visible progress toward your financial goals.</h4>
              <div className='first-goal'>
                <NewGoal getGoals={this.props.getGoals} />
              </div>
            </div>
            : 
          this.props.show ? allCards : filteredCards }
        </div>
      </div>
    )
  }
}
