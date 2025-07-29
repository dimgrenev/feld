import React from 'react';
import './Media.css';

export interface MediaProps {
  id?: string;
  src: string;
  type: 'image' | 'video' | 'audio';
  alt?: string;
  width?: number | string;
  height?: number | string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
  className?: string;
}

export const Media: React.FC<MediaProps> = ({ 
  id,
  src, 
  type,
  alt,
  width,
  height,
  controls = true,
  autoplay = false,
  loop = false,
  muted = false,
  poster,
  className,
  ...rest 
}) => {
  const mediaClasses = [
    'feld-media',
    `feld-media--${type}`,
    className
  ].filter(Boolean).join(' ');

  const renderMedia = () => {
    switch (type) {
      case 'image':
        return (
          <img
            src={src}
            alt={alt || ''}
            width={width}
            height={height}
            className="feld-media-element"
          />
        );
      case 'video':
        return (
          <video
            src={src}
            width={width}
            height={height}
            controls={controls}
            autoPlay={autoplay}
            loop={loop}
            muted={muted}
            poster={poster}
            className="feld-media-element"
          />
        );
      case 'audio':
        return (
          <audio
            src={src}
            controls={controls}
            autoPlay={autoplay}
            loop={loop}
            muted={muted}
            className="feld-media-element"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={mediaClasses}
      
      
      
      {...rest}
    >
      {renderMedia()}
    </div>
  );
};

export default Media; 