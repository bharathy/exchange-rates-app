import React, { Component } from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from '../utils/mapDispatchToProps';
import mapStateToProps from '../utils/mapStateToProps';

import TableHeader from './tableHeader';
import TableRow from './tableRow';

export class RatesTable  extends Component { 
	constructor(props) {
		super(props);
	}

	render() {
		const { rates } = this.props;

		return(
			(<div className="divTable gridTable mt30">
				<div className="divTableHeading bdr-btm">
					<div className="divTableRow">
						<TableHeader headerTitle='Currency'/>
						<TableHeader headerTitle='Rates' />
					</div>
				</div>
				<div className="divTableBody">
					{ rates && Object.keys(rates).map((key, i) => <TableRow currency={ key } rate={ rates[key] } key={ i } />) }
				</div>
			</div>)
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RatesTable);
