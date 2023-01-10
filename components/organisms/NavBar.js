import React from 'react';
import Logo from '../atoms/Logo';
import NavigationLinks from '../molecules/NavigationLinks';
import SocialLinks from '../molecules/SocialLinks';
import Button from '../atoms/Button';
import styles from './NavBar.module.css';

export default function NavBar() {
	return (
		<nav className={styles.nav}>
			<Logo />
			<div className={styles.links}>
				<NavigationLinks />
				<SocialLinks />
				<Button href="/listen">Listen Now</Button>
			</div>
		</nav>
	);
}
