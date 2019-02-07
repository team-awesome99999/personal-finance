import React from 'react';
import { Carousel } from 'react-bootstrap';
import goldeye from './landing_images/goldeye.jpg'
import finance from './landing_images/finance.jpg'
import money from './landing_images/money.jpg'

function LandingCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className='landing-carousel' width={900} height={500} alt="900x500" src={goldeye} />
        </Carousel.Item>
        <Carousel.Item>
          <img className='landing-carousel' width={900} height={500} alt="900x500" src={finance} />
        </Carousel.Item>
        <Carousel.Item>
          <img className='landing-carousel' width={900} height={500} alt="900x500" src={money} />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default LandingCarousel;