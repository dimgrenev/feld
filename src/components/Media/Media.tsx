import React from 'react';
import { MediaSpec } from './spec';
import './Media.css';

export const Media: React.FC<MediaSpec> = ({ type = 'image', src, alt = '', ...rest }) => {
  if (!src) {
    return null;
  }

  switch (type) {
    case 'image':
      return <img src={src} alt={alt} className="feld-media-image" {...rest} />;
    case 'video':
      return (
        <video controls className="feld-media-video" data-testid="feld-video" {...rest}>
          <source src={src} />
          Your browser does not support the video tag.
        </video>
      );
    default:
      return null;
  }
}; 