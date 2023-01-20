import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import defaultThumbnail from '../../public/images/default-thumbnail.jpg';

export default function EpisodeThumbnail({ thumbnail, width, filmTitle, aboveTheFold }) {
	return (
		<Image
			src={thumbnail}
			width={width}
			height={width}
			alt={`${filmTitle} thumbnail`}
			priority={aboveTheFold}
			style={{
				maxWidth: '100%',
				height: 'auto',
			}}
		/>
	);
}

EpisodeThumbnail.propTypes = {
	thumbnail: PropTypes.string.isRequired,
	width: PropTypes.number,
	filmTitle: PropTypes.string.isRequired,
	aboveTheFold: PropTypes.bool,
};

EpisodeThumbnail.defaultProps = {
	thumbnail: defaultThumbnail,
	width: 1000,
	filmTitle: 'Movie title missing, fallback',
	aboveTheFold: false,
};
