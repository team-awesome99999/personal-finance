import React, { Component } from 'react';
import NewUser from '../NewUser/NewUser';
import Header from '../Header';
import Graphs from '../Graphs/Graphs.js';
import axios from 'axios';
import {connect} from 'react-redux';
import {getAccount} from '../../dux/reducer.js';
import NewUserHeader from '../NewUserHeader';

class HomePage extends Component {
  state={}

  async componentDidMount(){
    let res = await axios.get(`/accounts`)
    this.props.getAccount(res.data)
  }
  
  render() {
    let {userAccount} = this.props
    return (
      <div>
        {
          userAccount.accounts==false ? (
            <div className='homepage-truthy'>
              <NewUserHeader />
              <NewUser />
            </div>
          ):(
            <div className='homepage-falsy'>
            <Header/>
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