import React, { Component } from 'react';
import './LandingPage.css';
import { Carousel } from 'react-bootstrap'
import axios from 'axios';

class Landing extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }

  signup = async () => {
    const { firstname, lastname, email, password } = this.state;
    let res = axios.post('/auth/signup', { firstname, lastname, email, password })
    console.log(res.data);
  }

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
          <input 
            value={this.state.firstname}
            onChange={ (e) => this.setState({ firstname: e.target.value }) }
            type="text"/>
          <label htmlFor="">Last Name</label>
          <input 
            value={this.state.lastname}
            onChange={ (e) => this.setState({ lastname: e.target.value }) }
            type="text"/>
          <label htmlFor="">Email Address</label>
          <input 
            value={this.state.email}
            onChange={ (e) => this.setState({ email: e.target.value }) }
            type="text"/>
          <label htmlFor="">Password</label>
          <input 
            value={this.state.password}
            onChange={ (e) => this.setState({ password: e.target.value }) }
            type="text"/>
          <button onClick={ () => this.signup() }>Register</button>
        </div>
        <div>
          <div>
            <i className="far fa-money-bill-alt"></i>
            <h4>See Your Numbers</h4>
          </div>
          <div>
            <i className="fas fa-chart-line"></i>
            <h4>See the Changes</h4>
          </div>
          <div>
            <i className="fas fa-skiing"></i>
            <h4>Plan Your Future</h4>
          </div>
          <div>
            <i className="fas fa-check"></i>
            <h4>Done!</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;