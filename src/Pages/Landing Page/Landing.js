import React, { Component } from 'react';
import './LandingPage.css';
import Header from '../Header';
import Signup from '../Landing Page/Signup';
import LandingCarousel from '../Landing Page/LandingCarousel';
import Icons from './Icons';

class Landing extends Component {

  render() {
    return (
      <div className='landing-main'>
        <Header/>
        <div><h1 className='trassets'>Trassets</h1></div>
        <LandingCarousel/>
        <div className='landing-prompts'>
          <div>
            <h1 className='prompt'>Get insights into your finances</h1>
          </div>
          <Signup/>
        </div>
        <Icons />
      </div>
    );
  }
}

export default Landing;