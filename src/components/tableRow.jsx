import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ currency, rate }) =>  {
    return (
        <div className="divTableRow">
            <div className="divTableCell ft-12">{ currency }</div>
            <div className="divTableCell ft-12">{ rate }</div>
        </div>
    );
};

TableRow.propTypes = {
	currency: PropTypes.string.isRequired,
	rate: PropTypes.number.isRequired
};

export default TableRow;