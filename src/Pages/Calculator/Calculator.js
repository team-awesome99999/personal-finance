import React,{Component} from 'react';
import currencyFormatter from 'currency-formatter';

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
        <div className='calc-box'>
          <div className='calculator-parent'>
            <input className='debt-inputs debt-currency' type="number" placeholder='Loan Amount($)' onChange={(e)=>this.setState({amount: e.target.value})} />
            <input className='debt-inputs debt-currency' type="number" placeholder='Interest Rate(%)' onChange={(e)=>this.setState({apr: e.target.value})} />
            <input className='debt-inputs debt-currency' type="number" placeholder='Loan Length(years)' onChange={(e)=>this.setState({years: e.target.value})} />
            <button className='debt-btn' onClick={()=>this.calculate()}>Calculate</button>
            {
              this.state.arr[0] ?
                (
                <div>
                  <div>
                    <div> Monthly Payment: <span className='debt-currency'>{currencyFormatter.format(this.state.arr[0], { locale: 'en-US' })}</span></div>
                    <div> Total Loan Amount:  
                      <span className='debt-currency'> {currencyFormatter.format(this.state.arr[1], { locale: 'en-US' })}</span>
                    </div>
                    <div> Total Interest:  
                      <span className='debt-currency'> {currencyFormatter.format(this.state.arr[2], { locale: 'en-US' })}</span>
                    </div>
                  </div>
                  {/* CAN UNCOMMENT ONCE THIS FEATURE IS WRITTEN */}
                  {/* <div className='save-debt-goal'><div>Save to goal</div></div> */} 
                </div>
                ):(
                <div>
                </div>
                )
            }
          </div>
        </div>
      )
    }
}

export default Calculator;