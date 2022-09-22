import React from 'react';
import Avatar from '../Avatar';
import renderer from 'react-test-renderer';

describe(`Avatar:`, () => {
	test(`Avatar should return null if name not provided`, () => {
		const component = renderer.create(
			<Avatar />
		);
		let tree = component.toJSON();
		expect(tree).toEqual(null);
	});
});