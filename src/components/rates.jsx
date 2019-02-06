import React, { Component } from 'react';
import { connect } from 'react-redux';

import dateToYMD from '../utils/date-utils.js';
import mapDispatchToProps from '../utils/mapDispatchToProps';
import mapStateToProps from '../utils/mapStateToProps';

import DatePick from '../components/DatePick';
import BaseCurrency from '../components/BaseCurrency';
import RatesTable from '../components/RatesTable';

export class Rates  extends Component {
	constructor(props) {
		super(props);

		this._handleOnSubmit = this._handleOnSubmit.bind(this);
	}

	render() {
		const { success, error } = this.props;
		const errorMsg = `Oops! Unable to load exchange rates due to following error: ${ error }! Please try again!`;

	    return (
	    	<div className="content-box m-0-auto p20 w-half">
		        <DatePick />
		        <BaseCurrency />
		        <input className="bg-orange bdr-radius-6 bdr-white cur-hand ft-bold mt10 white" 
		        type="button" value="Submit" onClick={this._handleOnSubmit}/>
		        { success && <RatesTable /> }
		        { (!success && error) && <div className="center orange p30"> { errorMsg } </div> }
	    	</div>
	    )
	}

	_handleOnSubmit(e) {
		const { date, currency, fetchRates} = this.props;

		fetchRates(dateToYMD(date), currency);
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Rates);