import React, { Component } from 'react';
import './Graphs.css';
import axios from 'axios';
import Plot from 'react-plotly.js';
import moment from 'moment';
import { Carousel } from 'react-bootstrap';
import AddBalance from '../HomePage/AddBalance';
import MonthlyChanges from './MonthlyChanges';

class Graphs extends Component {
  state = {
    accounts: [],
    balances: [],
    index: 0,
    direction: null,
    total: [],
  }

  //grab two arrays from db
  //one is for account balance, other is for accountDate

  componentDidMount = async () => {
    axios.get(`/accounts`)
      .then(res => {
        this.setState({ accounts: res.data.accounts, balances: res.data.balances })
      })
  }


  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {


    let displayBalance = this.state.accounts.map((acct, id) => {
      let newBalances = this.state.balances.filter((bal, id) => {
        if (acct.id === bal.accountid) {
          return true
        } else {
          return false
        }
      })
      const x_axis = newBalances.map((val, id) => {
        return moment(val.entrydate).format("YYYY MMM Do")
      })
      const y_axis = newBalances.map((val, id) => {
        return parseFloat(val.balance)
      })
      // console.log("new balances", newBalances)

      return (
        <div>
          <div className='c-item' key={acct.id}>
            <Plot
              data={[
                {
                  //date value from mapped array inside of x
                  x: x_axis.reverse(),
                  //specified value from mapped array
                  y: y_axis.reverse(),
                  type: 'scatter',
                  mode: 'Line Dash',
                  marker: {
                    line: {
                      color: 'rgb(231, 99, 250)',
                      width: '20px'
                    }, size: 7
                  },
                },
              ]}
              layout={{ title: acct.name, autosize: true }}
              useResizeHandle={true}
              style={{ width: "80%", height: "100%" }}
              config={{ responsive: true }}
            />
          </div>
          <div className='graph-add-bal'>
            <AddBalance accountid={acct.id} />
            <MonthlyChanges accountid={acct.id} />
          </div>
        </div>
      )
    })

    let groupOfAccounts = this.state.accounts.map((acct, id) => {
      let newBalances = this.state.balances.filter((bal, id) => {
        if (acct.id === bal.accountid) {
          return true
        } else {
          return false
        }
      })
      const x_axis = newBalances.map((val, id) => {
        return moment(val.entrydate).format("YYYY MMM Do")
      })
      const y_axis = newBalances.map((val, id) => {
        return parseFloat(val.balance)
      })
      // console.log("new balances", newBalances)

      return {

        //date value from mapped array inside of x
        x: x_axis.reverse(),
        //specified value from mapped array
        y: y_axis.reverse(),
        name: acct.name,
        type: 'scatter',
        mode: 'Line Dash',
      }
    })

    let grandMasterTotal =
      <Carousel.Item>
        <div className='c-item'>
          <Plot
            data={
              groupOfAccounts
            }
            layout={
              {
                title: 'Total Account Balances', 
                autosize: true, 
                legend: {
                  x: 1,
                  y: 1,
                  font: {
                    family: 'sans-serif',
                    size: 12
                  },
                },

              }
            }
            useResizeHandle={true}
            style={{ width: "80%", height: "100%" }}
            config={{ responsive: true }}
          />
        </div>
      </Carousel.Item>

    let carouselItems = displayBalance.map((graph, i) => {
      return (
        <Carousel.Item key={i} >
          <div className='landing-carousel' alt="900x500">{graph}</div>
        </Carousel.Item>
      )
    })


    const { index, direction } = this.state;

    return (
      <div>
        <div className='graphs-parent'>
          <Carousel
            indicators={false}
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
          >
            {grandMasterTotal}
            {carouselItems}
          </Carousel>
        </div>
      </div>
    )
  }
}

export default Graphs;

