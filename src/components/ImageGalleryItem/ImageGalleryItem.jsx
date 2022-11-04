import React from 'react';
import * as SC from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeimageurl,
  showModal,
}) => (
  <SC.GalleryItem key={id} onClick={showModal}>
    <SC.GalleryItemImage
      src={webformatURL}
      alt={tags}
      largeimageurl={largeimageurl}
    />
  </SC.GalleryItem>
);
ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeimageurl: PropTypes.string,
  tags: PropTypes.string,
  imgModal: PropTypes.func,
};
