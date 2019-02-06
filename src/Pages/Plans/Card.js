import React, { Component } from 'react'
import './Plans.css'
import { ProgressBar } from 'react-bootstrap'
import CircularProgressbar from 'react-circular-progressbar'

export default class Card extends Component {
    constructor() {
        super()

        this.state = {
            switch: false
        }
    }
    switcher = () => {
        this.setState({ switch: !this.state.switch })
    }
    render() {
        const percentage = (this.props.current/this.props.goal)*100
        return (
            <div className="card">
                {this.state.switch ?
                    <div>
                        <h1>{this.props.name}</h1>
                        <h2>Goal</h2>
                        <h3>{this.props.goal}</h3>
                        <h2>Current</h2>
                        <h3>{this.props.current}</h3>
                        <h2>End Date</h2>
                        <h3>{this.props.endDate}</h3>
                    </div>
                    :
                    <div>
                        <h1>{this.props.name}</h1>
                        <div className="progressLoader" style={{ width: '250px' }}>
                            <CircularProgressbar
                                percentage={percentage}
                                text={`${percentage}%`}
                                background
                                backgroundPadding={6}
                                styles={{
                                    background: {
                                        fill: '#fff',
                                    },
                                    
                                    text: {
                                        display: 'none'
                                    },
                                    path: {
                                        stroke: 'rgb(61, 248, 61)',
                                    },
                                    trail: { stroke: 'rgb(219, 219, 219)' },
                                }}
                            />
                            <h3 className="percentage">{percentage}%</h3>
                        </div>
                        <div>
                            <input className="input" type="text" />
                        </div>
                    </div>
                }
            </div>
        )
    }
}
