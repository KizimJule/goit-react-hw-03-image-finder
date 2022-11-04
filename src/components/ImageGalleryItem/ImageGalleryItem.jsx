import React from 'react';

export const ImageGalleryItem = ({ id, webformatURL, tags }) => (
  <li className="ImageGalleryItem" id={id}>
    <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
  </li>
);

// {
//   console.log(pictures);
//   const markup = pictures
//     .map((webformatURL, tags) =>  (
//         <li class="gallery-item">
//           <img src="webformatURL" alt="tags" loading="lazy" />
//         </li>
//       );
//     )
//     .join('');
//   return markup;
// };
