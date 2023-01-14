import React from 'react';
import EpisodeThumbnail from '../atoms/EpisodeThumbnail';
import { episodes } from '/data.js';

export default function HomeHero({}) {
	const mostRecentEpisode = episodes[0];
	return (
		<>
			<h1>
				{mostRecentEpisode.film.title} ({mostRecentEpisode.film.releaseYear})
			</h1>
			<p>{mostRecentEpisode.subtitle}</p>
			<p>{mostRecentEpisode.shortDescription}</p>
			<EpisodeThumbnail
				thumbnail={mostRecentEpisode.thumbnail}
				filmTitle={mostRecentEpisode.film.title}
			/>
			<button>Listen to Episode</button>
		</>
	);
}
