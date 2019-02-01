import React, { Component } from 'react';
import './Graphs.css';
import axios from 'axios';
import Plot from 'react-plotly.js';
import moment from 'moment';
import { Carousel } from 'react-bootstrap';
import AddBalance from '../HomePage/AddBalance';

class Graphs extends Component {
  state = {
    accounts: [],
    balances: [],
    index: 0,
    direction: null,
    total: []
  }

  //grab two arrays from db
  //one is for account balance, other is for accountDate

  componentDidMount() {
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
        <div className='c-item' key={id}>
          <Plot
            data={[
              {
                //date value from mapped array inside of x
                x: x_axis.reverse(),
                //specified value from mapped array
                y: y_axis,
                type: 'scatter',
                mode: 'lines+points',
                marker: { color: 'green' },
              },
            ]}
            layout={{ title: acct.name, autosize: true }}
            useResizeHandle={true}
            style={{ width: "80%", height: "100%" }}
            config={{ responsive: true }}
            />
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
        y: y_axis,
        type: 'scatter',
        mode: 'lines+points',
        marker: { color: 'green' }
      }
    })

    let grandMasterTotal =
      <Carousel.Item>
        <div className='c-item'>
          <Plot
            data={
              groupOfAccounts
            }
            layout={{ title: 'Total Accounts and Balances', autosize: true }}
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
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
            >
            {grandMasterTotal}
            {carouselItems}
          </Carousel>
        </div>
        <AddBalance />
      </div>
    )
  }
}

export default Graphs;

