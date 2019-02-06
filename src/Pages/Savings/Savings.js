import React,{Component} from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import Calculator from '../Calculator/Calculator';
import SubHeader from './SubHeader';
import Header from '../Header';
import './Savings.css';

class Savings extends Component{
    state={
        total: null,
        current: null,
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