import React from 'react';
import * as SC from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ pictures }) => (
  <SC.Gallery>
    {pictures.map(pic => (
      <ImageGalleryItem
        key={pic.id}
        webformatURL={pic.webformatURL}
        tags={pic.tags}
      />
    ))}
  </SC.Gallery>
);
