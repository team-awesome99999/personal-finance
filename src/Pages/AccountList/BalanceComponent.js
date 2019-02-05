import React, { Component } from 'react'
import './AccountList.css'
import AddBalance from '../HomePage/AddBalance';
import moment from 'moment'
import EditButton from '../AccountList/EditButton';
import DeleteBalance from './DeleteBalance'
import DeleteAccount from './DeleteAccount'
import currencyFormatter from 'currency-formatter'
import axios from 'axios';
import { Tooltip, ButtonToolbar, OverlayTrigger, Button } from 'react-bootstrap';

export default class BalanceComponent extends Component {
    state={
        switch: true,
        editName: false,
        newName: '',
        editing: false,
        date: moment(this.props.entrydate).format('l'),
        balance: this.props.balance
    }

    saveEdits = async (id) => {
        const { date, balance } = this.state;
        await axios.put('/api/editbalance', { id, date, balance });
        this.setState({ editing: false });
    }

  render() {
    return (
        <div key={this.props.balance.id} className="accounthistory">
        <div className="historydisplay" key={this.props.index + this.props.balance}>
            {this.state.editing ?
                <input className="listinput" onChange={(e)=> this.setState({date: e.target.value})} value={this.state.date} placeholder="Date"></input>
                :
                <h2 className="dateTime">{this.state.date}</h2>}
            {this.state.editing ?
                <input className="listinput historyBalance" onChange={(e)=> this.setState({balance: e.target.value})} value={this.state.balance} placeholder="Balance"></input>
                :
                <h2 className="historyBalance">{currencyFormatter.format(this.state.balance, { code: 'USD' })}</h2>}
            <div className="iconbuttons">
                <i onClick={() => this.setState({ editing: !this.state.editing })} className={this.state.editing ? "fas fa-pencil-alt hidden" : "fas fa-pencil-alt"}></i>
                {this.state.editing ?
                    <div className="buttonstuff">
                        <Button className="listbutton" onClick={() => this.saveEdits(this.props.balanceid)}>Save</Button>
                        <Button className="listbutton" onClick={() => this.setState({ editing: !this.state.editing })} variant="link">Cancel</Button>
                    </div> 
                        : 
                        null}
                <DeleteBalance
                    balanceid={this.props.balance.id}
                    />
            </div>
        </div>
    </div>
    )
  }
}
