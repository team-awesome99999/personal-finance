import React, { Component } from 'react';
import './LandingPage.css';
import { Carousel } from 'react-bootstrap'

class Landing extends Component {
  render() {
    return (
      <div className='landing-main'>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="http://placehold.it/900x500" />
            <Carousel.Caption>
              <h3>First carousel caption</h3>
              <p>A description for the caption</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div>
          <label htmlFor="">First Name</label>
          <input type="text"/>
          <label htmlFor="">Last Name</label>
          <input type="text"/>
          <label htmlFor="">Email Address</label>
          <input type="text"/>
          <label htmlFor="">Password</label>
          <input type="text"/>
          <button>Register</button>
        </div>
        <div>
          <div>
            <i class="far fa-money-bill-alt"></i>
            <h4>See Your Numbers</h4>
          </div>
          <div>
            <i class="fas fa-chart-line"></i>
            <h4>See the Changes</h4>
          </div>
          <div>
            <i class="fas fa-skiing"></i>
            <h4>Plan Your Future</h4>
          </div>
          <div>
            <i class="fas fa-check"></i>
            <h4>Done!</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;