import React, { Component } from 'react'
import './AccountList.css'
import littleicon from './../../_ionicons_svg_ios-close-circle-outline.svg'

export default class AccountComponent extends Component {
    state = {
        switch: true
    }
    switch() {
        this.setState({
            switch: !this.state.switch
        })
    }
    render() {
        console.log(this.props)
        return (
            <div className="all-accounts">
                <div className="account">
                    <h2>{this.props.name}</h2>
                    <h2>${this.props.currentTotal}</h2>
                </div>
                <div className={this.state.switch ? "history notvisible" : "history"}>
                    <h3>{this.props.history}</h3>
                </div>
                <img src={littleicon} onClick={() => this.switch()} className={this.state.switch ? "iconx" : "iconx iconactive"} ></img>
            </div>
        )
    }
}