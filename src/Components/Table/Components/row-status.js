import React from 'react';
import { Spinner, Badge } from 'reactstrap';
import PropTypes from 'prop-types';


const RowStatusComponent = ({ status }) => (
  <td>
    {status === 'processing' && <Spinner />}
    {status === 'success' && <Badge color="success">Success</Badge>}
    {status === 'error' &&  <Badge color="danger">Error</Badge>}
  </td>
);

RowStatusComponent.propTypes = {
  status: PropTypes.string.isRequired
};

RowStatusComponent.defaultProps = {
  status: 'processing',
};

export default RowStatusComponent;