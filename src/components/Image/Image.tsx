import React from 'react';
import { ImageSpec } from './spec';
import './Image.css';

const Image: React.FC<ImageSpec> = ({ src, alt, ...rest }) => {
  return <img src={src} alt={alt} className="feld-image" {...rest} />;
};

export default Image;
