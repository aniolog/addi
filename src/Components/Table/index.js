import React from 'react';
import { Table, Container, Row, Col, Button } from 'reactstrap';
import { validatePerson } from '../../Services/validation-service';
import RowStatusComponent from './Components/row-status';
import ModalComponent from '../Modal';
import { PROCESSING_STATUS, SUCCESS_STATUS, ERROR_STATUS } from '../../Constants';

const headerStyle = {
  textAlign: 'left',
};

const bannerStyle = {
  textAlign: 'center',
  paddingBottom: '50px',
}

const containerStyle = {
  backgroundColor: '#ecf0f1',
};


class TableComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        prospects: [],
        modalOpen: false,
      };
      this.startValidationProcess = this.startValidationProcess.bind(this);
      this.shouldOpenModal = this.shouldOpenModal.bind(this);
    }
    
    startValidationProcess(person) {
      const { prospects: editableProspects } = this.state;
      const unprocessedPerson = { ...person, status: PROCESSING_STATUS };
      editableProspects.unshift(unprocessedPerson);
      validatePerson(unprocessedPerson).then((result) => {
        if (result) {
          console.log(`Persona identificada con el numero ${unprocessedPerson.id} ha sido agregada`);
          unprocessedPerson.status = SUCCESS_STATUS;
        } else {
          console.log(`Hubo un error procesando la persona con el numero de identificacion: ${unprocessedPerson.id}`);
          unprocessedPerson.status = ERROR_STATUS;
        }
        this.forceUpdate();
      });
      this.setState({ prospects: editableProspects, modalOpen: false })
    }

    shouldOpenModal(openState) {
      let modalOpen;
      const { modalOpen: currentState } = this.state;
      modalOpen = !currentState;
      this.setState({ modalOpen });
    }

    render() {
        const { prospects, modalOpen } = this.state;
        return (
          <div>
            <Row>
              <Col xl="9">
                <h1 style={headerStyle}>Prueba Addi</h1>
              </Col>
              <Col xl="3">
                <Button color="primary" onClick={this.shouldOpenModal}>Agregar prospecto</Button>
              </Col>
            </Row>
            
            <Container fluid={true} style={containerStyle}>
                <Table>
                  <thead>
                    <tr>
                      <th>Tipo de documento</th>
                      <th>Documento de identidad</th>
                      <th>Fecha de expedicíon</th>
                      <th>Nombre completo</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prospects.map(({ id, documentType, status, name, expeditionDate }) => 
                      <tr key={id}>
                        <td>{documentType}</td>
                        <td>{id}</td>
                        <td>{expeditionDate}</td>
                        <td>{name}</td>
                        <RowStatusComponent status={status} />
                      </tr>
                    )}
                  </tbody>
                </Table>
                {prospects.length === 0 && <h3 style={bannerStyle}>No hay prospectos.</h3>}
              </Container>
              <ModalComponent
                open={modalOpen}
                onCandidateSubmit={this.startValidationProcess}
                onCloseModal={this.shouldOpenModal}
              />
              
            </div>
        );
    }
}

export default TableComponent;