import React from 'react';
import { Spinner, Badge } from 'reactstrap';
import PropTypes from 'prop-types';
import { PROCESSING_STATUS, SUCCESS_STATUS, ERROR_STATUS } from '../../../Constants';


const RowStatusComponent = ({ status }) => (
  <td>
    {status === PROCESSING_STATUS && <Spinner />}
    {status === SUCCESS_STATUS && <Badge color="success">Success</Badge>}
    {status === ERROR_STATUS &&  <Badge color="danger">Error</Badge>}
  </td>
);

RowStatusComponent.propTypes = {
  status: PropTypes.string.isRequired
};

RowStatusComponent.defaultProps = {
  status: PROCESSING_STATUS,
};

export default RowStatusComponent;