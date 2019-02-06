import React,{Component} from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

class Savings extends Component{
    state={
        total: null,
        current: null,
    }

    trace1 = {
        x: [],
        y: [this.state.total],
        text: [ 'Horizontal Dashed Line'],
        mode: 'text'
      };


    render(){
        return(
            <div className='savings-parent'>
            <Plot 
              data={[
                this.trace1,
                {
                    //date value from mapped array inside of x
                    x: [1],
                    //specified value from mapped array
                    y: [5],
                    type: 'bar',
                    mode: 'Line Dash',
                    marker: {
                      line: {
                        color: 'rgb(231, 99, 250)',
                        width: '20%'
                      }, size: 7
                    },
                  },
              ]}
              layout={{title: 'Vertical and Horizontal Lines Positioned Relative to the Axes',
              xaxis: {
                range: [0, 7]
              },
              yaxis: {
                range: [0, 10]
              },
              width: 500,
              height: 500,
              shapes: [
                //Line Horizontal
                {
                  type: 'line',
                  x0: .5,
                  y0: 10,
                  x1: 1.5,
                  y1: 10,
                  line: {
                    color: 'rgb(50, 171, 96)',
                    width: 4,
                    // dash: 'dashdot'
                  }
                },
              ]
            }}
              useResizeHandle={true}
              style={{ width: "80%", height: "100%" }}
              config={{ responsive: true }}
            />

            </div>
        )
    }
}

export default Savings;