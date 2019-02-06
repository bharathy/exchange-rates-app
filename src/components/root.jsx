import React from 'react';
import PropTypes from 'prop-types';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import AppRoutes from '../routes';

const Root = ({ store }) =>
    <Provider store={ store }>
        <AppRoutes />
    </Provider>;

export default Root;