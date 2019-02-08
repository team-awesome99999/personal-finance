import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SubHeader extends Component {

  render() {
    return (
      <div className='subheader'>
        <div onClick={ () => this.props.openCalculator() } className='subheader-items'>Debt Calculator</div>
        <div onClick={()=>this.props.displayNewGoal()} className='subheader-items'>Add New Goal</div>
        <Link className='completedgoals' to='/completedgoals'><div className='subheader-items'>Completed Goals</div></Link>
      </div>
    );
  }
}

export default SubHeader;