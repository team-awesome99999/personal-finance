import React,{Component} from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

class Graphs extends Component{
    state={
        total:7,
        assets:10,
        debts:30,
    }

    //grab two arrays from db
    //one is 

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
        return(
            <div className='graphs-parent'>
                <input type='number' value={this.state.total} onChange={(e)=>this.updateTotal(e.target.value)} />
                <input type='number' value={this.state.assets} onChange={(e)=>this.updateAssets(e.target.value)} />
                <input type='number' value={this.state.debts} onChange={(e)=>this.updateDebts(e.target.value)} />

                <Plot
                    data={[
                    {
                        x: ['total','assets','debts'],
                        y: [this.state.total,this.state.assets],
                        type: 'scatter',
                        mode: 'lines+points',
                        marker: {color: 'green'},
                    },
                    // {type: 'bar', x: [1, 2, 3], y: [this.state.total,this.state.assets]},
                    ]}
                    layout={ {width: 640, height: 480, title: 'Debts and Assets'} }

                    
                />
            </div>
        )
    }
}

export default Graphs;
















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

    