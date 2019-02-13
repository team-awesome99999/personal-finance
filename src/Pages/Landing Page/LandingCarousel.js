import React from 'react';
import { Carousel } from 'react-bootstrap';
import goals from './landing_images/goals.png';
import accounts from './landing_images/accounts.png';
import graphs from './landing_images/graphs.png';

function LandingCarousel() {
  return (
    <div>
      <Carousel indicators={false}>
        <Carousel.Item>
          <img className='landing-carousel' width={900} height={500} alt="900x500" src={goals} />
        </Carousel.Item>
        <Carousel.Item>
          <img className='landing-carousel' width={900} height={500} alt="900x500" src={accounts} />
        </Carousel.Item>
        <Carousel.Item>
          <img className='landing-carousel' width={900} height={500} alt="900x500" src={graphs} />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default LandingCarousel;