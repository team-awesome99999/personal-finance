
import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

class EditButton extends Component {

  state = {
    editing: false,
    date: this.props.date,
    balance: this.props.balance
  }

  editingMode = () => {
    this.setState({ editing: !this.state.editing })
  }

  render() {
    return (
      <div>
        <Button onClick={ () => this.editingMode() }>Edit</Button>
        { this.state.editing ? 
          <div>
            <FormControl>
              <FormGroup
                autoFocus
                value={ this.state.date }
                placeholder="Edit date"
                onChange={ (e) => this.setState({ date: e.target.value }) }
              />
            </FormControl>
            <FormControl>
              <FormGroup
                value={ this.state.balance }
                placeholder="Edit balance"
                onChange={ (e) => this.setState({ balance: e.target.value }) }
              />
            </FormControl> 
          </div> 
        : null }
      </div>
    );
  }
}

export default EditButton;