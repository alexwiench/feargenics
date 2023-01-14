import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import defaultThumbnail from '../../public/images/default-thumbnail.jpg';

export default function EpisodeThumbnail({ thumbnail, width, filmTitle }) {
	return <Image src={thumbnail} width={width} height={width} alt={`${filmTitle} thumbnail`} />;
}

EpisodeThumbnail.propTypes = {
	thumbnail: PropTypes.string.isRequired,
	width: PropTypes.number,
	filmTitle: PropTypes.string.isRequired,
};

EpisodeThumbnail.defaultProps = {
	thumbnail: defaultThumbnail,
	width: 500,
	filmTitle: 'Movie title missing, fallback',
};