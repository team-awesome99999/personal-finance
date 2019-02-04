import React,{Component} from 'react';
import './Graphs.css';
import axios from 'axios';
import Plot from 'react-plotly.js';
import moment from 'moment';
import { Carousel } from 'react-bootstrap';

class Graphs extends Component{
    state={
        accounts:[],
        balances:[],
        index: 0,
        direction: null,
        total:[]
    }

    //grab two arrays from db
    //one is for account balance, other is for accountDate

    componentDidMount(){
        axios.get(`/accounts`)
             .then(res=>{
                this.setState({accounts: res.data.accounts, balances: res.data.balances})
             })
    }


    handleSelect = (selectedIndex, e) => {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }

 

    render(){


      let displayBalance=this.state.accounts.map((acct,id)=>{
        let newBalances=this.state.balances.filter((bal,id)=>{
          if(acct.id===bal.accountid){
            return true
          } else {
            return false
          }
        })
        const x_axis = newBalances.map((val,id)=>{
          return moment(val.entrydate).format("YYYY MMM Do")
        })
        const y_axis = newBalances.map((val,id)=>{
          return parseFloat(val.balance)
        })
        // console.log("new balances", newBalances)
        
        return(
          <div className='accountBalance-parent' key={id}>

                    <Plot 
                    
                    data={[
                      {
                        //date value from mapped array inside of x
                        x: x_axis.reverse(),
                        //specified value from mapped array
                        y: y_axis,
                        type: 'scatter',
                        mode: 'lines+points',
                        marker: {color: 'green'},
                      },
                    ]}
                    layout={ {width: 1000, height: 650, title: acct.name} }
                    />
                </div>
            )
          })

          let groupOfAccounts = this.state.accounts.map((acct,id)=>{
            let newBalances=this.state.balances.filter((bal,id)=>{
              if(acct.id===bal.accountid){
                return true
              } else {
                return false
              }
            })
            const x_axis = newBalances.map((val,id)=>{
              return moment(val.entrydate).format("YYYY MMM Do")
            })
            const y_axis = newBalances.map((val,id)=>{
              return parseFloat(val.balance)
            })
            // console.log("new balances", newBalances)
            
            return{
                          
                            //date value from mapped array inside of x
                            x: x_axis.reverse(),
                            //specified value from mapped array
                            y: y_axis,
                            type: 'line',
                            mode: 'lines+points',
                            marker: {color: 'green,yellow,blue,orange'},
                            // colors: axios.get('http://www.colr.org/color/random')
                          }
              })

          let grandMasterTotal = 
          <Carousel.Item>
            
            <Plot 
              data={
                groupOfAccounts
              }
              layout={{width:1000, height: 650, title: 'Total Accounts and Balances'}}
              />
              </Carousel.Item>
          
          let carouselItems = displayBalance.map(graph => {
            return(
              <Carousel.Item>
                <div className='landing-carousel' alt="900x500">{graph}</div>
              </Carousel.Item>
            )
          })

          
          
          const { index, direction } = this.state;
          // console.log(displayBalance, "Display balance");
          return(
            <div className='graphs-parent'>
                <Carousel
                  activeIndex={index}
                  direction={direction}
                  onSelect={this.handleSelect}
                  >
                  {grandMasterTotal}
                  {carouselItems}</Carousel>
            </div>
        )
    }
}

export default Graphs;

