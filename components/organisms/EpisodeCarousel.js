import React from 'react';
import styles from './EpisodeCarousel.module.css';
import EpisodeCarouselItem from '../molecules/EpisodeCarouselItem';

export default function EpisodeCarousel({ episodes, amount }) {
	const mostRecentEpisodes = episodes.slice(0, amount); // filter to only
	return (
		<div className={styles.sectionContainer}>
			<div className={styles.centering}>
				<div className={styles.sectionName}>
					<h2>Recent Episodes</h2>
				</div>
				<div className={styles.container}>
					{mostRecentEpisodes.map((episode) => (
						<EpisodeCarouselItem
							className={styles.episodeItem}
							key={episode.guid}
							episode={episode}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
