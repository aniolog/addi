import React from 'react';
import { 
  ModalBody,
  Modal,
  ModalHeader,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

const initialFormValue = {
  id: undefined,
  documentType: undefined,
  name: undefined,
  expeditionDate: undefined
};

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { ...initialFormValue},
      formValid: false,
    };
    this.submitCandidate = this.submitCandidate.bind(this);
  }

  onChangeField(key, value) {
    const { value: editableValue } = this.state;
    editableValue[key] = value;
    const formValid = Object.keys(editableValue).every((key) => editableValue[key]);
    this.setState({ value: editableValue, formValid });
  }

  submitCandidate() {
    const { value } = this.state;
    const { onCandidateSubmit } = this.props;
    onCandidateSubmit(value);
    this.setState({ value: { ...initialFormValue }, formValid: false })
  }

  render() {
    const { formValid } = this.state;
    const { open, onCloseModal } = this.props;
    return(
      <Modal isOpen={open}>
        <ModalHeader>Agregar prospecto</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="documentType">Tipo de documento</Label>
              <Input
                type="select"
                name="documentType"
                id="exampleSelect"
                required={true}
                onChange={({ target }) => this.onChangeField('documentType', target.value)}
              >
                <option value={undefined}>Seleccione un tipo de documento</option>
                <option>CC</option>
                <option>CE</option>
                <option>Pasaporte</option>
                <option>Lic. de conducir</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="id">Documento de identidad</Label>
              <Input
                type="text"
                id="id" required={true}
                onChange={({ target }) => this.onChangeField('id', target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="expeditionDate">Fecha de expedicíon del documento</Label>
              <Input
                type="date"
                id="expeditionDate"
                required={true}
                
                onChange={({ target }) => this.onChangeField('expeditionDate', target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Nombre completo</Label>
              <Input 
                type="text"
                id="name"
                required={true}
                onChange={({ target }) => this.onChangeField('name', target.value)}
              />
            </FormGroup>
        
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" disabled={!formValid} onClick={this.submitCandidate}>Agregar</Button>
          <Button color="secondary" onClick={() => onCloseModal()}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalComponent;