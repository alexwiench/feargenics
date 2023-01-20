import React from 'react';
import Link from 'next/link';
import styles from './NavigationLinks.module.css';

import { Work_Sans } from '@next/font/google';
const work = Work_Sans({ subsets: ['latin'] });

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
			<ul className={`${styles.ul} ${work.className}`}>
				{links.map((link) => (
					<li className={`${styles.li} ${work.className}`} key={link.href}>
						<Link href={link.href}>{link.text}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
