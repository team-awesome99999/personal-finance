// takes in props from card component
import React,{Component} from 'react';
import currencyFormatter from 'currency-formatter'
import '../Plans/Plans.css'

class SavingsItem extends Component{
  
    render(){
        return(
            <div onClick={ this.props.handleClick } className='card' key={this.props.id}>
                <h1 className='cardTitle'>Name: {this.props.name}</h1>
                <h3 className='Title'>Savings Goal: </h3>
                <h3 className='cardNumber'>{currencyFormatter.format(this.props.goal, { code: 'USD' })}</h3>
                <h3 className='cardTitle'>Saved: </h3>
                <h3 className='cardNumber'>{currencyFormatter.format(this.props.current, { code: 'USD' })}</h3>
                <h5 className='cardTitle' >End Date:</h5>
                <h5 className='cardNumber'>{this.props.endDate}</h5>
                <button>Edit</button>
                <button>Delete Goal</button>
            </div>
        )
    }
}

export default SavingsItem
