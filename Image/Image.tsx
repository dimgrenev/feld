import React from 'react';
import './Image.css';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  id?: string;
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  variant?: 'default' | 'rounded' | 'circle' | 'thumbnail';
  lazy?: boolean;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({ 
  id,
  src, 
  alt,
  width,
  height,
  variant = 'default',
  lazy = false,
  className,
  ...rest 
}) => {
  const imageClasses = [
    'feld-image',
    `feld-image--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={lazy ? 'lazy' : 'eager'}
      className={imageClasses}
      
      
      
      {...rest}
    />
  );
};

export default Image; 