import React from 'react';
import PropTypes from 'prop-types';
import EpisodeThumbnail from '../atoms/EpisodeThumbnail';

export default function HomeHero({ data }) {
	const { film, subtitle, shortDescription, thumbnail, title } = data;
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
