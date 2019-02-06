import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ headerTitle }) => {
    return (
        <div className= 'divTableHead center ft-16 ft-bold'>
            <div className='orange'> { headerTitle } </div>
        </div>
    );
};

TableHeader.propTypes = {
    headerTitle: PropTypes.string.isRequired
};

export default TableHeader;