import React from 'react';
import { ModalBody, Modal, ModalHeader, ModalFooter, Button, Form, FormGroup, Input } from 'reactstrap';

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {},
    };
  }

  render() {
    return(
      <Modal isOpen={false}>
        <ModalHeader>Agregar prospecto</ModalHeader>
        <ModalBody>

        </ModalBody>
        <ModalFooter>
          <Button color="primary">Do Something</Button>{' '}
          <Button color="secondary">Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalComponent;