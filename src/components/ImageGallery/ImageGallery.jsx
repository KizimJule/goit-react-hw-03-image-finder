import React from 'react';
import * as SC from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ pictures, showModal }) => (
  <SC.Gallery>
    {pictures.map(pic => (
      <ImageGalleryItem
        key={pic.id}
        webformatURL={pic.webformatURL}
        tags={pic.tags}
        largeimageurl={pic.largeimageurl}
        showModal={showModal}
      />
    ))}
  </SC.Gallery>
);

ImageGallery.propTypes = {
  pictures: PropTypes.array,
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
};
