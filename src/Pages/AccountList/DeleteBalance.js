import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class DeleteBalance extends Component {

  deleteBalance = async (id) => {
    await axios.delete(`/api/deletebalance/${id}`);
  }

  render() {
    return (
      <div>
        <Button onClick={ () => this.deleteBalance(this.props.balanceid) }>Delete</Button>
      </div>
    );
  }
}

export default DeleteBalance;