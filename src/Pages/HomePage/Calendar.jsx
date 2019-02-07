import React, { Component } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';

class Calendar extends Component {

  state = {
    email: ''
  }

  render() {

    const popover = (
      <Popover id='popover-basic' title='Want Calendar Reminders?'>
        To help you remember to update your balances often, add reminders to your calendar as recurring events. Enter your email below to have a calendar event sent right to you!
        <div className='invite'>
          <input
            className='invite-input' 
            onChange={ (e) => this.setState({ email: e.target.value }) }type="text"/>
          <div className='send-invite'>Send</div>
        </div>
      </Popover>
    )

    return (
      <OverlayTrigger trigger='click' placement='right' overlay={ popover }>
        <i className="calendar far fa-calendar-alt"></i>
      </OverlayTrigger>
    );
  }
}

export default Calendar;

// const popover = (
//   <Popover id="popover-basic" title="Popover right">
//     And here's some <strong>amazing</strong> content. It's very engaging. right?
//   </Popover>
// );

// const Example = () => (
//   <OverlayTrigger trigger="click" placement="right" overlay={popover}>
//     <Button variant="success">Click me to see</Button>
//   </OverlayTrigger>
// );
