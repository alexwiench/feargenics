import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './Button.module.css';
import { Work_Sans } from '@next/font/google';
const work = Work_Sans({ subsets: ['latin'] });

export default function Button({ label = 'button', href = '/' }) {
	return (
		<>
			<Link href={href}>
				<button className={`${styles.button} ${work.className}`} type="button">
					{label}
				</button>
			</Link>
		</>
	);
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	href: PropTypes.string,
};
