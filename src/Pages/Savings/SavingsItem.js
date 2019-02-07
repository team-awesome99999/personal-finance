import React,{Component} from 'react';
import axios from 'axios'

class SavingsItem extends Component{
    state={}

    render(){
        console.log(this.props)
        return(
            <div className='savingsitem-parent' key={this.props.id}>
                <h1>Name: {this.props.account.name}</h1>
                <h3>Current Saved: ${this.props.account.current_amount}</h3>
                <h3>Savings Goal: ${this.props.account.end_amount}</h3>
                <h5>End Date: {this.props.account.end_date}</h5>
                <button>Edit</button>
                <button>Delete Goal</button>
            </div>
        )
    }
}

export default SavingsItem