import React from 'react';
import { Table, Container } from 'reactstrap';
import { verifyUserData } from '../../Services/govermentService';
import { verifyPoliceRecords } from '../../Services/policeService';
import { getUserScore } from '../../Services/addiService';

class TableComponent extends React.Component {
    
    componentDidMount() {
        verifyUserData({ test: 1 }).then((data) => console.log(data));
        verifyPoliceRecords('1').then((data) => console.log(data));
        getUserScore('1').then((data) => console.log(data));
    }

    render() {
        return (
            <Container fluid={true} style={{ backgroundColor: '#ecf0f1' }}>
                <Table>
                <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
                </Table>
            </Container>
        );
    }
}

export default TableComponent;