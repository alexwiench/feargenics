import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import EpisodeThumbnail from '../atoms/EpisodeThumbnail';
import styles from './EpisodeCarouselItem.module.css';

export default function EpisodeCarouselItem({ episode }) {
	const { film, subtitle, shortDescription, thumbnail, title, slug } = episode;
	const { title: filmTitle, releaseYear } = film;
	return (
		<>
			<div className={styles.container}>
				<EpisodeThumbnail thumbnail={thumbnail} filmTitle={title} />

				<h1>
					{filmTitle} ({releaseYear})
				</h1>
				<h2>{subtitle}</h2>
				<p>{shortDescription}</p>
				<Link href={`episodes/${slug}`}>Listen to episode</Link>
			</div>
		</>
	);
}

EpisodeCarouselItem.propTypes = {
	episode: PropTypes.shape({
		film: PropTypes.shape({
			title: PropTypes.string,
			releaseYear: PropTypes.number,
		}),
		title: PropTypes.string,
		subtitle: PropTypes.string,
		shortDescription: PropTypes.string,
		thumbnail: PropTypes.any,
		slug: PropTypes.string,
	}),
};

EpisodeCarouselItem.defaultProps = {
	film: {
		title: 'Film title',
		releaseYear: 1999,
	},
	title: 'Episode title',
	subtitle: 'Episode Subtitle',
	shortDescription: 'Short episode description',
	slug: '/',
};
