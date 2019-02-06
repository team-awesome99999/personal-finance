import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import GraphsForModal from './GraphsForModal';

class GraphModal extends Component {

  render() {

    return (
      <div>
        <Modal
        {...this.props}
        size="lg"
        >
          <Modal.Body>
            <GraphsForModal 
              accountsarray={ this.props.accountsarray}
              balancesarray={ this.props.balancesarray}
              accountid={ this.props.accountid }
              accountname={ this.props.accountname }
              />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default GraphModal;