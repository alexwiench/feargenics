import Head from 'next/head';

//data
import { episodes } from '/data.js';

//components
import Layout from '../components/Layout';
import HomeHero from '../components/organisms/HomeHero';
import EpisodeCarousel from '../components/organisms/EpisodeCarousel';

//not needed yet but will helpful when connecting to an api
export async function getStaticProps() {
	const mostRecentEpisode = episodes[0];

	return {
		props: {
			episodes,
			mostRecentEpisode,
		},
	};
}

export default function Home({ mostRecentEpisode, episodes }) {
	return (
		<>
			<Head>
				<title>Feargenics: A Horror Film Podcast</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<HomeHero data={mostRecentEpisode} />
				<EpisodeCarousel episodes={episodes} amount={3} />
			</Layout>
		</>
	);
}
