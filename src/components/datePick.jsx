import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate } from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';

import mapDispatchToProps from '../utils/mapDispatchToProps';
import mapStateToProps from '../utils/mapStateToProps';


class DatePick extends Component {
	constructor(props) {
		super(props);

		this._handleDayChange = this._handleDayChange.bind(this);
	}

	render() {
		const classes = { container: "inline-block mr60 w-173", overlayWrapper: "absolute bg-white" , overlay: ""};

		return (
			<DayPickerInput classNames={ classes } placeholder="Select Date" formatDate={ formatDate }
			selectedDay={ this.props.date } onDayChange={ this._handleDayChange } />
		)
	}

	_handleDayChange(selectedDay, modifiers, dayPickerInput) {
	  const inputValue = dayPickerInput.getInput().value.trim();

	  this.props.updateDatePicker(inputValue);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePick);
