import React, { Component } from 'react';
import AddAccount from './AddAccount';
import { Link } from 'react-router-dom'
import happyman from './pictures/happyman.jpg';

class NewUser extends Component {
  
  render() {
    return (
      <div className='new-user'>
        <div>
          <h1 className='new-user-title'>Watch Your Money Grow</h1>
          <p className='about'>It's easy to track your finances with Trassets.</p>
          <p className='about'>Just add the accounts you want to track, and update the balances as often as you like.</p>
          <p className='about'>Once you know how your money stands, you can make better choices for your future.</p>
          <h2>Get started now!</h2>
          <AddAccount />
          <div className='next-link'>
            <Link className='link' to="/accounts">Next</Link>
          </div>
        </div>
        <img className='happyman' alt="900x500" src={happyman} />
      </div>
    );
  }
}

export default NewUser;