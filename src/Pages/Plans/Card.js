// takes in props from plans component
import React, { Component } from 'react';
import './Plans.css';
import CircularProgressbar from 'react-circular-progressbar';
import ReactCardFlip from 'react-card-flip';
import SavingsItem from '../Savings/SavingsItem';

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
    let number = total + inputVal
    this.setState({
      total: number,
      inputVal: ''
    })
  }

  render() {

    const percentage = ((( this.props.current ? this.props.current : this.state.total) / this.props.goal) * 100).toFixed(1)
    return (

      <div>
        <ReactCardFlip infinite={true} isFlipped={this.state.isFlipped}>
          <div key="front">
            <div className="card">
            { this.props.deleteOptions ? <i onClick={ () => this.props.deleteGoal(this.props.goalid) } className="delete fas fa-times"></i> : null }
            { this.props.editOptions ? <i onClick={ () => this.props.editGoal(this.props.goalid) } className="edit fas fa-pencil-alt"></i> : null }
              <h1 className="cardTitle">{this.props.name}</h1>
              <div onClick={this.handleClick} className="progressLoader" style={{ width: '250px' }}>
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
                <input
                  onKeyUp={event => {
                    if (event.key === 'Enter') {
                      this.addValue()
                    }
                  }}
                  value={this.state.inputVal}
                  className="input"
                  type="text"
                  onChange={(e) => this.setState({ inputVal: e.target.value })}></input>
              </div>
            </div>
          </div>
          <div key="back">
            <SavingsItem 
              handleClick={ this.handleClick }
              id={this.props.id}
              name={ this.props.name }
              goal={ this.props.goal }
              current={ this.props.current }
              endDate={ this.props.endDate }

            />
          </div>
        </ReactCardFlip>
      </div>
    )
  }
}

