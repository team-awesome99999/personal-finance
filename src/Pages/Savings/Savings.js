import React,{Component} from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import Calculator from '../Calculator/Calculator';
import SubHeader from './SubHeader';
import Header from '../Header';
import './Savings.css';
import SavingsItem from './SavingsItem';
import NewGoal from './NewGoal.js';

class Savings extends Component{
    state={
        total: null,
        current: null,
        openCalculator: false,
        newGoalDisplay: false,
        savingsAccounts:[],
    }

    componentDidMount(){ //get savings account for the session user
      axios.get(`/api/savings`)
           .then(res=>{
             console.log(res,'line 20')
             this.setState({savingsAccounts: res.data})
             console.log(this.state.savingsAccounts,'line 22')
           })
    }

    componentDidUpdate(prevState){
      if(prevState !== this.state.savingsAccounts){
        axios.get(`/api/savings`)
        .then(res=>{
          console.log(res,'line 20')
          this.setState({savingsAccounts: res.data})
          console.log(this.state.savingsAccounts,'line 22')
        })
      } else {
        
      }
    }

    async editSavingsGoal(){ //allows user to modify their current savings amount
      await axios.put()
                 .then()
    }

    async deleteSavingsGoal(){ //allows end user to delete the current savings goal
      await axios.delete()
           .then()
    }

    openCalculator = () => {
        this.setState({ openCalculator: !this.state.openCalculator })
      }

    displayNewGoal = ()=>{
      this.setState({newGoalDisplay: !this.state.newGoalDisplay})
    }

    render(){
      let displaySavings = this.state.savingsAccounts.map((account,id)=>{ //mapping over savingsAccounts on state to display all savings accounts for the user
        console.log(account)
        return( //passing props down to SavingsItem component
          <SavingsItem id={id} account={account} addSavingsAccount={this.addSavingsAccount} editSavingsGoal={this.editSavingsGoal} deleteSavingsGoal={this.deleteSavingsGoal} />
        )
      })
        return(
            <div className='savings-parent'>
              <Header />
              <SubHeader openCalculator={ this.openCalculator } displayNewGoal={this.displayNewGoal} />
              { this.state.openCalculator ?
              <Calculator /> 
              : null }   
              { this.state.newGoalDisplay ?<NewGoal /> : null }   
              
              {displaySavings}    
            </div>
        )
    }
  }
export default Savings;