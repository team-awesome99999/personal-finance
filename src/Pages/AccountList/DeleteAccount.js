import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class DeleteAccount extends Component {

  deleteAccount = async (id) => {
    await axios.delete(`/api/deleteaccount/${id}`);
  }

  render() {
    return (
      <div>
        <Button onClick={ () => this.deleteAccount(this.props.accountid) }>Delete</Button>
      </div>
    );
  }
}

export default DeleteAccount;