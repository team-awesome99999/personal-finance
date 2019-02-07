import React, { Component } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import axios from 'axios';

class Calendar extends Component {

  state = {
    email: '',
    sent: false
  }

  sendInvite = async () => {
    let res = await axios.post('/sendemail', { email: this.state.email });
    if(res.data === 'Message Sent!') {
      this.setState({ email: '', sent: true })
    }
  }

  render() {

    const popover = (
      <Popover id='popover-basic' title='Want Calendar Reminders?'>
        To help you remember to update your balances often, add reminders to your calendar as recurring events. Enter your email below to have a calendar event sent right to you!
        <div className='invite'>
          <input
            value={ this.state.email }
            className='invite-input' 
            onChange={ (e) => this.setState({ email: e.target.value }) }type="text"/>
          { this.state.sent ? <i className="sent-true fas fa-check"></i>  : <div onClick={ () => this.sendInvite() } className='send-invite'>Send</div>}
        </div>
      </Popover>
    )

    return (
      <OverlayTrigger trigger='click' placement='right' overlay={ popover }>
        <i onClick={ () => this.setState({ sent: false })} className="calendar far fa-calendar-alt"></i>
      </OverlayTrigger>
    );
  }
}

export default Calendar;
