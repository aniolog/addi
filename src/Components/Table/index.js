import React from 'react';
import { Table, Container, Row, Col, Button } from 'reactstrap';
import { validatePerson } from '../../Services/validation-service';
import RowStatusComponent from './Components/row-status';
import ModalComponent from '../Modal';

const headerStyle = {
  textAlign: 'left',
};

const containerStyle = {
  backgroundColor: '#ecf0f1',
};


class TableComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        people: [],
        modalOpen: false,
      };
      this.startValidationProcess = this.startValidationProcess.bind(this);
    }
    
    startValidationProcess(person) {
      const { people: editablePeople } = this.state;
      const unprocessedPerson = { ...person, status: 'processing' };
      editablePeople.unshift(unprocessedPerson);
      validatePerson(unprocessedPerson).then((result) => {
        if (result) {
          console.log(`Persona identificada con el numero ${unprocessedPerson.id} ha sido agregada`);
          unprocessedPerson.status = 'success';
        } else {
          console.log(`Hubo un error procesando la persona con el numero de identificacion: ${unprocessedPerson.id}`);
          unprocessedPerson.status = 'error';
        }
        this.forceUpdate();
      });
      this.setState({ people: editablePeople })
    }

    render() {
        const { people } = this.state;
        return (
          <div>
            <Row>
              <Col xl="9">
                <h1 style={headerStyle}>Prueba Addi</h1>
              </Col>
              <Col xl="3" color="primary"><Button>Agregar prospecto</Button></Col>
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
                    {people.map(({ id, documentType, status, name, expeditionDate }) => 
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
              </Container>
              <ModalComponent />
            </div>
        );
    }
}

export default TableComponent;