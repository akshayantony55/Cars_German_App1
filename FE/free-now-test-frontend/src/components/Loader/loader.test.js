import React from 'react';
import Loader from '../Loader';
import renderer from 'react-test-renderer';

describe(`Loader:`, () => {
	test(`Loader exports an SVG spinner as expected`, () => {
		const component = renderer.create(
			<Loader />
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});