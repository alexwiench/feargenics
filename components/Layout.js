import React from 'react';
import styles from './Layout.module.css';
import NavBar from './organisms/NavBar';

export default function Layout({ children }) {
	return (
		<>
			<div className={styles.header}>
				<NavBar />
			</div>

			{children}
		</>
	);
}
