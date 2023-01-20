import React from 'react';
import styles from './EpisodeCarousel.module.css';
import EpisodeCarouselItem from '../molecules/EpisodeCarouselItem';

export default function EpisodeCarousel({ episodes, amount }) {
	const mostRecentEpisodes = episodes.slice(0, amount); // filter to only
	return (
		<>
			<div className={styles.container}>
				{mostRecentEpisodes.map((episode) => (
					<EpisodeCarouselItem key={episode.guid} episode={episode} />
				))}
			</div>
		</>
	);
}
