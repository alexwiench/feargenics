import Layout from '../../components/Layout';
import { episodes } from '/data';

export default function Episode({ episode }) {
	return (
		<Layout>
			<h1>{episode.title}</h1>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = episodes.map((episode) => {
		return {
			params: { slug: episode.slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const episode = episodes.find((e) => e.slug === params.slug);

	return {
		props: {
			episode,
		},
	};
}
