import React from 'react';
import PropTypes from 'prop-types';
import EpisodeThumbnail from '../atoms/EpisodeThumbnail';

export default function EpisodeCarouselItem({ episode }) {
	const { film, subtitle, shortDescription, thumbnail, title } = episode;
	const { title: filmTitle, releaseYear } = film;
	return (
		<>
			<h1>
				{filmTitle} {releaseYear}
			</h1>
			<p>{title}</p>
			<p>{subtitle}</p>
			<p>{shortDescription}</p>
			<EpisodeThumbnail thumbnail={thumbnail} filmTitle={title} />
			<button>Listen to Episode</button>
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
};
