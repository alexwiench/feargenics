import React from 'react';
import Twitter from '../atoms/icons/Twitter';
import Youtube from '../atoms/icons/Youtube';
import Instagram from '../atoms/icons/Instagram';
import styles from './SocialLinks.module.css';

export default function SocialLinks() {
	return (
		<div className={styles.links}>
			<a href="https://twitter.com/feargenics">
				<Twitter />
			</a>

			<a href="https://youtube.com/@feargenics">
				<Youtube />
			</a>
			<a href="https://instagram.com/feargenicsofficial">
				<Instagram />
			</a>
		</div>
	);
}
