import React from 'react';

import TableHeader from '../src/components/TableHeader';

const testProps = {
	headerTitle: 'Rates'
}

describe('Given a TableHeader component', () => {
	describe('When component is rendered', () => {
		let wrapper;

		beforeEach(() => wrapper = shallow(<TableHeader { ...testProps} />));

		it('should render the TableHeader', () => {
			expect(1).to.be(1);
			expect(wrapper).to.have.length(1);
		});
	});
});