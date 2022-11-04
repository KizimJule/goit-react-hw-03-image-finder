import React from 'react';

export const ImageGalleryItem = ({ id, webformatURL, tags }) => (
  <li className="ImageGalleryItem" key={id}>
    <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
  </li>
);
