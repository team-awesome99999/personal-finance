import React, { Component } from 'react';

class SubHeader extends Component {

  render() {
    return (
      <div className='subheader'>
        <div onClick={ () => this.props.openCalculator() } className='subheader-items'>Debt Calculator</div>
        <div onClick={()=>this.props.displayNewGoal()} className='subheader-items'>Add New Goal</div>
        <div className='subheader-items'>Completed Goals</div>
      </div>
    );
  }
}

export default SubHeader;