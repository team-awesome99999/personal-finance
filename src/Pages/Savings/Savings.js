import React,{Component} from 'react'
import axios from 'axios'
import Calculator from '../Calculator/Calculator';
import SubHeader from './SubHeader';
import Header from '../Header';
import './Savings.css';

class Savings extends Component{

  state={
    openCalculator: false
  }

  openCalculator = () => {
    this.setState({ openCalculator: !this.state.openCalculator })
  }

  render(){
    return(
      <div className='savings-parent'>
        <Header />
        <SubHeader openCalculator={ this.openCalculator }/>
        { this.state.openCalculator ?
        <Calculator />
        : null }
      </div>
    )
  }
}

export default Savings;