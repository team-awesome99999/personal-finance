import React,{Component} from 'react';
import axios from 'axios';

class Calculator extends Component{
    state = {
        amount: null,
        apr: null,
        years: null,
        payment: null,
        total: null,
        totalInterest: null,
        arr:[]
    }

    calculate=()=>{
        let amount = this.state.amount
        let apr = this.state.apr
        let years = this.state.years
        // let payment = this.state.payment
        // let total = this.state.total
        // let totalInterest = this.state.totalInterest
    
        // Get the user's input from the input elements.
        // Convert interest from a percentage to a decimal, and convert from
        // an annual rate to a monthly rate. Convert payment period in years
        // to the number of monthly payments.
        
        let principle = parseFloat(amount);
        let interest = parseFloat(apr)/100/12;
        let payments = parseFloat(years)*12;
        
        //compute monthly payments
        let val = Math.pow(1+interest,payments) //.pow will run the power function in math
        let monthlyPayment = (principle*val*interest)/(val-1)
        
        let payment = monthlyPayment.toFixed(2);
        let total = (monthlyPayment * payments).toFixed(2);
        let totalinterest = ((monthlyPayment*payments)-principle).toFixed(2);
        let totalArr=[]
        totalArr.push(payment,total,totalinterest)
        // console.log(totalArr,this.state.arr)
        this.setState({arr:totalArr})
        return totalArr
    }
    render(){
        return(
            <div className='calculator-parent'>
                <input type="number" placeholder='Loan Amount($)' onChange={(e)=>this.setState({amount: e.target.value})} />
                <input type="number" placeholder='Interest Rate(%)' onChange={(e)=>this.setState({apr: e.target.value})} />
                <input type="number" placeholder='Loan Length(years)' onChange={(e)=>this.setState({years: e.target.value})} />
                <button onClick={()=>this.calculate()}></button>
                {
                    this.state.arr[0] ?
                        (
                        <div>
                            <h1> Monthly Payment: ${this.state.arr[0]}</h1>
                            <h1> Total Loan Amount: ${this.state.arr[1]}</h1>
                            <h1> Total Interest: ${this.state.arr[2]}</h1>
                        </div>
                        ):(
                        <div>
                        </div>
                        )
                }
            </div>
        )
    }
}

export default Calculator;