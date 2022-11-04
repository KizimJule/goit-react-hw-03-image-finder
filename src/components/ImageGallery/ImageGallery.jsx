import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ pictures }) => (
  <ul className="gallery">
    {pictures.map(pic => (
      <ImageGalleryItem
        key={pic.id}
        webformatURL={pic.webformatURL}
        tags={pic.tags}
      />
    ))}
  </ul>
);
