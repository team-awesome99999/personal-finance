import React, { Component } from 'react';
import './LandingPage.css';
import Header from '../Header';
import Signup from '../Landing Page/Signup';
import Icons from '../Landing Page/Icons';
import LandingCarousel from '../Landing Page/LandingCarousel';

class Landing extends Component {

  render() {
    return (
      <div className='landing-main'>
        <Header/>
        <LandingCarousel/>
        <Signup/>
        <Icons/>
      </div>
    );
  }
}

export default Landing;