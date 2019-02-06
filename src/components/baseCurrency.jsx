import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import mapDispatchToProps from '../utils/mapDispatchToProps';
import mapStateToProps from '../utils/mapStateToProps';
import currency from '../utils/currency.js'

class BaseCurrency extends Component {
	constructor(props) {
		super(props);
		this._handleCurrencyChange = this._handleCurrencyChange.bind(this);
	}

	render() {
		let currencyList = currency.map((cur, i) => { 
			return (<option key={ `cur-${ i }` } value={cur.code}> {cur.name} </option>); 
		});

		return (
			<div className="inline-block styled-select bg-orange semi-square mt10 mr60">
				<select id="base-currency" onChange={ this._handleCurrencyChange }>
				    <option value="">Select Base Currency</option>
				    { currencyList }
				</select>
			</div>
		)
	}

	_handleCurrencyChange(event) {
	  this.props.updateBaseCurrency(event.target.value);
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(BaseCurrency);
