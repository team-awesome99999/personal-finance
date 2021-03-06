// takes in props from card component
import React, { Component } from 'react';
import currencyFormatter from 'currency-formatter'
import moment from 'moment';
import '../Plans/Plans.css'

class SavingsItem extends Component {

  render() {
    return (
      <div onClick={this.props.handleClick} className='card' key={this.props.id}>
        <h1 className='cardTitle'>{this.props.name}</h1>
        <h5>Savings Goal: </h5>
        <h3 className='cardNumber'>{currencyFormatter.format(this.props.goal, { code: 'USD' })}</h3>
        <h5>Saved: </h5>
        <h3 className='cardNumber'>{currencyFormatter.format(this.props.current, { code: 'USD' })}</h3>
        <h5>Save by:</h5>
        <h5 className='cardNumber'>{moment(this.props.endDate).format('l')}</h5>
      </div>
    )
  }
}

export default SavingsItem
