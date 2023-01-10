import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({ children, href }) {
	return (
		<>
			<Link href={href}>
				<button className={styles.button} type="button">
					{children}
				</button>
			</Link>
		</>
	);
}
