import React, { Component } from 'react'

export default class AccountComponent extends Component {
    state={
        switch: true
    }
    switch(){
        this.setState({
            switch: !this.state.switch
        })
    }
  render() {
      console.log(this.props)
    return (this.state.switch ?
        <div>
            <h2>{this.props.name}</h2>
            <h2>${this.props.currentTotal}</h2>
            <button onClick={()=>this.switch()}>{this.state.switch ? "+" : "-"}</button>
        </div>
        :
        <div>
            <div>
                <h2>{this.props.name}</h2>
                <h2>${this.props.currentTotal}</h2>
            </div>
            <div>
                <p>{this.props.history}</p>
                <button onClick={()=>this.switch()}>{this.state.changer ? "+" : "-"}</button>
            </div>
        </div>
    )
  }
}
