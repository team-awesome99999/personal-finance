import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import moment from 'moment';

class GraphsForModal extends Component {
  
  render() {
    // console.log(this.props.accountsarray, this.props.balancesarray, this.props.accountid)
    let account = this.props.accountsarray.filter(account => this.props.accountid === account.id)
    let balances = this.props.balancesarray.filter(balance => balance.accountid === account[0].id);
    const x_axis = balances.map(balance => {
      return moment(balance.entrydate).format("YYYY MMM Do");
    })
    const y_axis = balances.map(balance => {
      return parseFloat(balance.balance)
    })

    return (
      <div className='modal-graph'>
        <Plot
          data={[
            {
              x: x_axis,
              y: y_axis,
              type: 'scatter',
              mode: 'lines+markers',
              line: { shape: 'spline' },
              marker: {
                size: 7
              },
            },
          ]}
          layout={{ title: this.props.accountname, width: '900', height: '500' }}
          config={{ displayModeBar: false }}
        />
      </div>
    );
  }
}

export default GraphsForModal;