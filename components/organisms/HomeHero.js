import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import styles from './HomeHero.module.css';
import backgroundImage from '../../public/images/HeaderBackground.jpg';

import Button from '../atoms/Button';
import EpisodeThumbnail from '../atoms/EpisodeThumbnail';

import { Work_Sans } from '@next/font/google';
const work = Work_Sans({ subsets: ['latin'] });

export default function HomeHero({ data }) {
	const { film, subtitle, shortDescription, thumbnail, title } = data;
	const { title: filmTitle, releaseYear } = film;
	return (
		<div>
			{/* 
				This is a Next.js hacky way of getting image optimization on a background image. 
				See https://github.com/vercel/next.js/discussions/18357 for details. 
			*/}
			<div className={styles.bgWrap}>
				<Image
					alt="Header background"
					src={backgroundImage}
					placeholder="blur"
					quality={100}
					fill
					sizes="100vw"
					priority
					style={{
						objectFit: 'cover',
					}}
				/>
			</div>
			<div className={styles.centerContent}>
				<div className={styles.contentContainer}>
					<div className={`${styles.headerText} ${work.className}`}>
						<h2>Featured Episode</h2>
						<h1>
							{filmTitle} ({releaseYear})
						</h1>
						<p>{shortDescription}</p>
						<div className={styles.ctaSection}>
							<Button label="Listen Now" href="/listen"></Button>
						</div>
					</div>
					<div className={styles.thumbnail}>
						<EpisodeThumbnail
							thumbnail={thumbnail}
							filmTitle={title}
							width={2000}
							aboveTheFold={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

HomeHero.propTypes = {
	data: PropTypes.shape({
		film: PropTypes.shape({
			title: PropTypes.string,
			releaseYear: PropTypes.number,
		}),
		title: PropTypes.string,
		subtitle: PropTypes.string,
		shortDescription: PropTypes.string,
		thumbnail: PropTypes.any,
	}),
};

HomeHero.defaultProps = {
	title: 'Episode title',
	subtitle: 'Episode Subtitle',
	shortDescription: 'Short episode description',
	filmTitle: 'Film title',
	releaseYear: 1999,
};
