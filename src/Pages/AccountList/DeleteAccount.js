import React, { Component } from 'react';
import axios from 'axios';

class DeleteAccount extends Component {

  deleteAccount = async (id) => {
    await axios.delete(`/api/deleteaccount/${id}`);
  }

  render() {
    return (
      <div onClick={() => this.deleteAccount(this.props.accountid)}>
        <i className="fas fa-trash-alt"></i>

      </div>
    );
  }
}

export default DeleteAccount;