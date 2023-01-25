//data
import { episodes } from '../../data';

//components
import Layout from '../../components/Layout';
import EpisodeCarousel from '../../components/organisms/EpisodeCarousel';

//not needed yet but will helpful when connecting to an api
export async function getStaticProps() {
	return {
		props: {
			episodes,
		},
	};
}

export default function AllEpisodes({ mostRecentEpisode, episodes }) {
	return (
		<>
			<Layout>
				<EpisodeCarousel episodes={episodes} amount={99} />
			</Layout>
		</>
	);
}
