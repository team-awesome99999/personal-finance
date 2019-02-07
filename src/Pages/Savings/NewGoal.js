import React,{Component} from 'react';
import axios from 'axios';

class NewGoal extends Component{
    state={
        goalName: '',
        currentSaved: null,
        savingsGoal: null,
        endDate: ''
    }
    
    
    newSavingsGoal=()=>{ //add savings account to backend
        let {goalName,currentSaved,savingsGoal,endDate} = this.state
        axios.post(`/api/newsavings`,{goalName,currentSaved,savingsGoal,endDate})
             .then(res=>{})
    }

    render(){
        return(
            <div className='newgoal-parent'>
                <input placeholder='Goal Name' type="text" onChange={(e)=>this.setState({goalName: e.target.value})} />
                <input placeholder='Amount Currently Saved($)' type="number" onChange={(e)=>this.setState({currentSaved: e.target.value})} />
                <input placeholder='Savings Goal($)' type="number" onChange={(e)=>this.setState({savingsGoal: e.target.value})} />
                <input placeholder='End Date' type="date" onChange={(e)=>this.setState({endDate:e.target.value})} />
                <button onClick={()=>this.newSavingsGoal()}>Add Goal</button>
            </div>
        )
    }
}

export default NewGoal