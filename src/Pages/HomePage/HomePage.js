import React, { Component } from 'react';
import NewUser from '../NewUser/NewUser';
import Header from '../Header';
import Graphs from '../Graphs/Graphs.js';
import axios from 'axios';
import {connect} from 'react-redux';
import {getAccount} from '../../dux/reducer.js';

class HomePage extends Component {
  state={}
  async componentDidMount(){
    let res = await axios.get(`/accounts`)
    // console.log(res)
    this.props.getAccount(res.data)
    // console.log(getAccount())
  }
  
  render() {
    let {userAccount} = this.props
    // console.log(userAccount)
    return (
      <div>
        {
          // .accounts.length==0
          userAccount.accounts==false ? (
            <div className='homepage-truthy'>
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

export default connect(mapStateToProps,{getAccount})(HomePage);