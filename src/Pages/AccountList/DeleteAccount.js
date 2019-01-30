import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class DeleteAccount extends Component {

  deleteAccount = async (id) => {
    await axios.delete(`/api/deleteaccount/${id}`);
  }

  render() {
    return (
      <div onClick={() => this.deleteAccount(this.props.accountid)}>
        <i class="fas fa-trash-alt"></i>

      </div>
    );
  }
}

export default DeleteAccount;