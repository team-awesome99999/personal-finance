import React, { Component } from 'react'
import Card from './Card'
import './Plans.css'

export default class Plans extends Component {
    state={
        total: '',
        current: '',
        info: [{goal: 1000, current: 100, endDate: '2/5/19', name: 'Tesla'}]
    }
  render() {
      let card = this.state.info.map((plan)=>{
        
        return (
            <Card
            goal={plan.goal}
            current={plan.current}
            endDate={plan.endDate}
            name={plan.name}
            />
        )
            
        
      })
    return (
      <div>
        {card}
      </div>
    )
  }
}
