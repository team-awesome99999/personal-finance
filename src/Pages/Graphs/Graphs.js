import React,{Component} from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import {connect} from 'react-redux';

class Graphs extends Component{
    state={
        total:7,
        assets:10,
        debts:30,
        accountBalance:[],
        accountDate:[]
    }

    //grab two arrays from db
    //one is for account balance, other is for accountDate

    componentDidMount(){
        axios.get(`/api/get-account`)
             .then(res=>{
                 console.log(res)
                this.setState({accountBalance:res.data.balance, accountDate: res.data.date})
                console.log(res)
             })
    }

    updateTotal=(val)=>{
        this.setState({total:val})
    }
    updateAssets=(val)=>{
        this.setState({assets:val})
    }
    updateDebts=(val)=>{
        this.setState({debts:val})
    }

    render(){
        let displayBalance=this.state.accountBalance.map((bal,id)=>{
            return(
                <div className='accountBalance-parent' key={id}>

                </div>
            )
        })
        let displayDate=this.state.accountDate.map((date,id)=>{
            return(
                <div className='accountdate-parent' key={id}>

                </div>
            )
        })
        return(
            <div className='graphs-parent'>
                <input type='number' value={this.state.total} onChange={(e)=>this.updateTotal(e.target.value)} />
                <input type='number' value={this.state.assets} onChange={(e)=>this.updateAssets(e.target.value)} />
                <input type='number' value={this.state.debts} onChange={(e)=>this.updateDebts(e.target.value)} />

                <Plot
                    data={[
                    {
                        //date value from mapped array inside of x
                        x: [1,2,3],
                        //specified value from mapped array
                        y: [this.state.total,this.state.total,this.state.total],
                        type: 'scatter',
                        mode: 'lines+points',
                        marker: {color: 'green'},
                    },
                    {
                        x: [1,2,3],
                        y: [this.state.assets,this.state.assets,this.state.assets],
                        type: 'scatter',
                        mode: 'lines+points',
                        marker: {color: 'blue'},
                    },
                    {
                        x: [1, 2, 3],
                        y: [this.state.debts,this.state.debts,this.state.debts],
                        type: 'scatter',
                        mode: 'lines+points',
                        marker: {color: 'red'},
                      },
                    ]}
                    layout={ {width: 640, height: 480, title: 'Debts and Assets'} }

                    
                />
            </div>
        )
    }
}

export default Graphs;



//   <Plot 
//                   useResizeHandler={true}
//                   data={[
//                     {
//                       x: dateArray,
//                       y: expectedRemaining,
//                       type: 'scatter',
//                       mode: 'Line Dash',
//                       marker: {color: 'blue'},
//                       name: 'expected'
//                     },
//                     {
//                       x: dateArray,
//                       y: actualRemaining,
//                       type: 'scatter',
//                       mode: 'Line Dash',
//                       marker: {color: 'green'},
//                       name: 'actual'
//                     }
//                     ]}
//                     layout={
//                     {
//                       width: document.documentElement.clientWidth / 2, 
//                       height: document.documentElement.clientHeight / 2, 
//                       title: 'Progress chart', 
//                       yaxis: { title: 'Hours' }, 
//                       showlegend: true, 
//                       legend: {x:1, y:1, xanchor:'auto'}, 
//                       displayModeBar:false}
//                     } 
//                     config={{displayModeBar: false}}/>
//                   </div>
//                 </div>



// let dateArray = this.props.tableArray.map(obj => {
//     return moment(obj.date).format();
//   })
//   let expectedRemaining = this.props.tableArray.map(obj => {
//     return Number((obj.remaining_expected).toFixed(2));
//   })
//   let actualRemaining = this.props.tableArray.filter(obj => {
//     if(obj.remaining_actual !== "") {
//     return true;
//     } else {return false}
//   }).map(obj => {
//     return Number((obj.remaining_actual).toFixed(2));
//   })













// PIE CHART
// data={[
//     {
//         values:[this.state.total,this.state.assets,this.state.debts],
//         type: 'pie',
//         marker: {color: 'green'},
//     },
//     {type: 'pie', x: [1, 2, 3], y: [2, 5, 3]},
//     ]}
//     layout={ {width: 640, height: 480, title: 'Debts and Assets'} }

    