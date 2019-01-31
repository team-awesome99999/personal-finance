
import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';

class EditButton extends Component {

  state = {
    editing: false,
    date: this.props.date,
    balance: this.props.balance
  }

  saveEdits = async(id) => {
    const { date, balance } = this.state;
    await axios.put('/api/editbalance', { id, date, balance });
    this.setState({ date: '', balance: '' });
  }

  render() {
    return (
      <div className="editButton">
        { this.state.editing ? 
          <Form>
            <FormGroup>
              <FormControl
                autoFocus
                value={ this.state.date }
                placeholder="Edit date"
                onChange={ (e) => this.setState({ date: e.target.value }) }
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                value={ this.state.balance }
                placeholder="Edit balance"
                onChange={ (e) => this.setState({ balance: e.target.value }) }
              />
            </FormGroup>
            <Button onClick={ () => this.saveEdits(this.props.balanceid) }>Save</Button>
            <Button onClick={ () => this.setState({ editing: !this.state.editing })} variant="link">Cancel</Button>
          </Form> 
        :  
        <i onClick={ () => this.setState({ editing: !this.state.editing }) } className="fas fa-pencil-alt"></i>
        }
      </div>
    );
  }
}

export default EditButton;