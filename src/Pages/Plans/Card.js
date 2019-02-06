import React, { Component } from 'react'
import './Plans.css'
import { ProgressBar } from 'react-bootstrap'
import CircularProgressbar from 'react-circular-progressbar'
import ReactCardFlip from 'react-card-flip';
import currencyFormatter from 'currency-formatter'

export default class Card extends Component {
    constructor() {
        super()

        this.state = {
            switch: false,
            total: 0,
            inputVal: '',
            isFlipped: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    switcher = () => {
        this.setState({ switch: !this.state.switch })
    }
    addValue = () => {
        let total = this.state.total
        let inputVal = Number(this.state.inputVal)
        console.log(inputVal, total)
        let number = total + inputVal
        console.log(typeof number)
        this.setState({
            total: number,
            inputVal: ''
        })
    }

    render() {

        const percentage = ((this.state.total / this.props.goal) * 100).toFixed(1)
        return (
            <div>

                <ReactCardFlip infinite={true} isFlipped={this.state.isFlipped}>

                    <div key="front">
                        <div className="card">
                            <h1 className="cardTitle">{this.props.name}</h1>
                            <div onClick={this.handleClick}  className="progressLoader" style={{ width: '250px' }}>
                                <CircularProgressbar
                                    onClick={this.handleClick} 
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
                                            stroke: '#5cb85c',
                                        },
                                        trail: { stroke: 'rgb(219, 219, 219)' },
                                    }}
                                />
                                <h3 className="percentage">{percentage}%</h3>
                            </div>
                            <div>
                                <input value={this.state.inputVal} className="input" type="text" onChange={(e) => this.setState({ inputVal: e.target.value })}></input>
                                <div onClick={this.addValue}>+</div>


                            </div>
                        </div>
                    </div>
                    <div key="back">
                        <div onClick={this.handleClick} className="card">
                            <h1 className="cardTitle">{this.props.name}</h1>
                            <h2 className="cardTitle">Goal</h2>
                            <h3 className="cardNumber">{currencyFormatter.format(this.props.goal, { code: 'USD' })}</h3>
                            <h2 className="cardTitle">Current</h2>
                            <h3 className="cardNumber">{currencyFormatter.format(this.state.total,{code: 'USD'})}</h3>
                            <h2 className="cardTitle">End Date</h2>
                            <h3 className="cardNumber">{this.props.endDate}</h3>
                        </div>
                    </div>
                </ReactCardFlip>





            </div>
        )
    }
}
