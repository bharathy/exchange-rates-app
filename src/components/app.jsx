import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import mapDispatchToProps from "../utils/mapDispatchToProps";
import mapStateToProps from "../utils/mapStateToProps";

import '../styles/rates.scss';

class App extends React.Component{

    render(){
        const { children } = this.props
        return (

            <div className="app">
                <h4 className="p20">Welcome to Exchange Rates App!</h4>
                <div className="content">
                    {children}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);