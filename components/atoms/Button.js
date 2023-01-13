import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

export default function Button({ label = 'button', href = '/' }) {
	return (
		<>
			<Link href={href}>
				<button className={styles.button} type="button">
					{label}
				</button>
			</Link>
		</>
	);
}

Button.propTypes = {
	/**
	 * Button contents
	 */
	label: PropTypes.string.isRequired,

	/**
	 * Link
	 */
	href: PropTypes.string,
};
