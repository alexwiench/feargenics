import React from 'react';

import Button from './Button';

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Button',
	component: Button,
	tags: ['autodocs'],
};

export const Primary = {
	args: {
		label: 'Button',
	},
};

export const Secondary = {
	args: {
		...Primary.args,
		label: '😄👍😍💯',
	},
};
