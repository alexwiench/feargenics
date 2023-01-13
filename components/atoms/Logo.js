import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/feargenics-logo.png';
import PropTypes from 'prop-types';

export default function Logo({ width = 188 }) {
	return (
		<>
			<Image src={logo} alt="feargenics logo" width={width} />
		</>
	);
}

Logo.propTypes = {
	/**
	 * Width of logo
	 */
	width: PropTypes.number,
};
