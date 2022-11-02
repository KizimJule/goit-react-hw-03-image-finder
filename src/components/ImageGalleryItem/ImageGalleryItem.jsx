import React, { Component } from 'react';

export const ImageGalleryItem = (images = []) => {
  const markup = images
    .map(image => {
      return (
        <li class="gallery-item">
          <img src="image.webformatURL" alt="image.tags" loading="lazy" />
        </li>
      );
    })
    .join('');
  return markup;
};
