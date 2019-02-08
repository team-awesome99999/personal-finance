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
    let card = this.props.goalInfo.map((goal, index) => {

      return (
        <Card
          key={goal + index}
          goal={goal.end_amount}
          current={goal.current_amount}
          endDate={goal.end_date}
          name={goal.name}
          id={goal.user_id}
          deleteOptions={ this.props.deleteOptions }
          goalid={goal.id}
          deleteGoal={ this.props.deleteGoal }
        />
      )


    })
    return (
      <div>
        <div className="cardwrap">
          {card}
        </div>
      </div>
    )
  }
}
