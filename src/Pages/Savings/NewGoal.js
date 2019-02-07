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
        axios.post()
             .then()
    }


    render(){
        return(
            <div className='newgoal-parent'>
                <input placeholder='CATS' type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </div>
        )
    }
}

export default NewGoal