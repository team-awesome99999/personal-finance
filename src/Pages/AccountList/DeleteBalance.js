import React, { Component } from 'react';
import axios from 'axios';

class DeleteBalance extends Component {
  state = {
    deleting: false
  }
  deleteBalance = async (id) => {
    this.setState({ deleting: true })
    await axios.delete(`/api/deletebalance/${id}`);
    this.setState({ deleting: false })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.deleting !== this.state.deleting) {
      this.props.accountDataFn();
    }
  }

  render() {
    return (
      <div className="deleteBalance" onClick={ () => this.deleteBalance(this.props.balanceid) }>
        <i className="fas fa-trash-alt"></i>
      </div>
    );
  }
}

export default DeleteBalance;