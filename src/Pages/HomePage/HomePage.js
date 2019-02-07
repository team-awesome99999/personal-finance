import React, { Component } from 'react';
import NewUser from '../NewUser/NewUser';
import Header from '../Header';
import Graphs from '../Graphs/Graphs.js';
import axios from 'axios';
import {connect} from 'react-redux';
import {getAccount} from '../../dux/reducer.js';
import NewUserHeader from '../NewUserHeader';
import Loading from '../Loading';
import Calendar from './Calendar';
import './HomePage.css';

class HomePage extends Component {
  state = {
    loading: true
  }

  async componentDidMount(){
    let res = await axios.get(`/accounts`)
    this.props.getAccount(res.data);
    this.setState({
      loading: false
    })
  }
  
  render() {
    let {userAccount} = this.props
    return (
      <div className='landing-main'>
        {this.state.loading ? <Loading /> :
            userAccount.accounts==false ? (
              <div className='homepage-truthy'>
                <NewUserHeader />
                <NewUser />
              </div>
            ):(
              <div className='homepage-falsy'>
              <Header/>
              <Calendar />
              <Graphs />
              </div>
            )
        }
      </div>
    );
  }
}
const mapStateToProps=(state)=>state;

export default connect(mapStateToProps,{ getAccount })(HomePage);