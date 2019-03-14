import React from 'react';
import { Spinner, Badge } from 'reactstrap';

const RowStatusComponent = ({ status }) => (
  <td>
    {status === 'processing' && <Spinner />}
    {status === 'success' && <Badge color="success">Success</Badge>}
    {status === 'error' &&  <Badge color="danger">Error</Badge>}
  </td>
);

export default RowStatusComponent;