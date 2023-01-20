import React from 'react';
import Logo from '../atoms/Logo';
import NavigationLinks from '../molecules/NavigationLinks';
import SocialLinks from '../molecules/SocialLinks';
import Button from '../atoms/Button';
import styles from './NavBar.module.css';

import { Work_Sans } from '@next/font/google';
const work = Work_Sans({ subsets: ['latin'] });

export default function NavBar() {
	return (
		<div className={styles.navSpacing}>
			<nav className={styles.nav}>
				<Logo />
				<div className={styles.links}>
					<NavigationLinks />
					<SocialLinks />
					<Button href="/listen">Listen Now</Button>
				</div>
			</nav>
		</div>
	);
}
