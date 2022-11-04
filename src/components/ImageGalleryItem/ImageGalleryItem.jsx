import React from 'react';
import * as SC from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, webformatURL, tags }) => (
  <SC.GalleryItem key={id}>
    <SC.GalleryItemImage src={webformatURL} alt={tags} />
  </SC.GalleryItem>
);
