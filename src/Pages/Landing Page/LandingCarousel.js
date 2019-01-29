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
          <Carousel.Caption>
            <div className='text-box'>
              <h3>When is the last time you looked into your finances?</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='landing-carousel' width={900} height={500} alt="900x500" src={finance} />
          <Carousel.Caption>
            <div className='text-box'>
              <h3>Do you have a financial plan?</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='landing-carousel' width={900} height={500} alt="900x500" src={money} />
          <Carousel.Caption>
            <div className='text-box'>
              <h3>Do you have the money to do the things you enjoy?</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default LandingCarousel;