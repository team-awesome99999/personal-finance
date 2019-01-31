import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class DeleteBalance extends Component {

  deleteBalance = async (id) => {
    await axios.delete(`/api/deletebalance/${id}`);
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