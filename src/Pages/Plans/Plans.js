//takes in props from savings component
import React, { Component } from 'react'
import Card from './Card'
import './Plans.css'

export default class Plans extends Component {
  state = {
    total: '',
    current: ''
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
          { this.props.show ? allCards : filteredCards}
        </div>
      </div>
    )
  }
}
