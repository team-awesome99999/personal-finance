import React, { Component } from 'react';
import axios from 'axios';

class DeleteAccount extends Component {

  state = {
    deleting: false
  }
  deleteAccount = async (id) => {
    this.setState({ deleting: true });
    await axios.delete(`/api/deleteaccount/${id}`);
    this.setState({ deleting: false });
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.deleting !== this.state.deleting) {
      this.props.accountDataFn();
    }
  }

  render() {
    return (
      <div className="trashIcon" onClick={() => this.deleteAccount(this.props.accountid)}>
        <i className="fas fa-trash-alt"></i>
      </div>
    );
  }
}

export default DeleteAccount;