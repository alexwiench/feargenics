import React from 'react';
import Link from 'next/link';
import styles from './NavigationLinks.module.css';

const links = [
	{
		text: 'Support Us',
		href: '/support',
	},
	{
		text: 'Watch',
		href: '/watch',
	},
	{
		text: 'Listen',
		href: '/listen',
	},
];

export default function NavigationLinks() {
	return (
		<>
			<ul className={styles.ul}>
				{links.map((link) => (
					<li className={styles.li} key={link.href}>
						<Link href={link.href}>{link.text}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
