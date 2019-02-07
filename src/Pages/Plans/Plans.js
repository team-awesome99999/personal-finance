import React, { Component } from 'react'
import Card from './Card'
import './Plans.css'

export default class Plans extends Component {
    state = {
        total: '',
        current: '',
        info: [{ goal: 1000, current: 100, endDate: '2/5/19', name: 'Tesla' }, { goal: 5000, current: 1500, endDate: '3/6/19', name: 'House' }, { goal: 5000, current: 1500, endDate: '3/6/19', name: 'House' }, { goal: 5000, current: 1500, endDate: '3/6/19', name: 'House' }, { goal: 5000, current: 1500, endDate: '3/6/19', name: 'House' }, { goal: 5000, current: 1500, endDate: '3/6/19', name: 'House' }]
    }
    render() {
        let card = this.state.info.map((plan) => {

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
                <div className="cardwrap">
                    {card}
                </div>
            </div>
        )
    }
}
