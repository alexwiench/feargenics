import EpisodeThumbnail from './EpisodeThumbnail';
//import thumbnail from '../../public/images/tcm.jpg';

export default {
	title: 'EpisodeThumbnail',
	component: EpisodeThumbnail,
};

export const Main = {
	args: {
		width: 500,
	},
	template: `<EpisodeThumbnail :thumbnail=thumbnail :width=width :filmTitle=filmTitle />`,
};
