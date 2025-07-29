import React from 'react';
import './Card.css';

export interface CardProps {
  id?: string;
  variant?: 'default' | 'elevated';
  media?: React.ReactNode;
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  id,
  variant = 'default',
  media,
  header,
  content,
  footer,
  children,
  onClick,
  className,
  ...rest
}) => {
  const cardClasses = [
    'feld-card',
    variant && `feld-card--${variant}`,
    onClick && 'feld-card--clickable',
    className
  ].filter(Boolean).join(' ');

  return (
    <article 
      className={cardClasses}
      onClick={onClick}
      
      
      
      {...rest}
    >
      {media && (
        <div className="feld-card__media">
          {media}
        </div>
      )}
      
      {(header || content || footer) && (
        <div className="feld-card__content">
          {header && (
            <div className="feld-card__header">
              {header}
            </div>
          )}
          
          {content && (
            <div className="feld-card__content-body">
              {content}
            </div>
          )}
          
          {footer && (
            <div className="feld-card__footer">
              {footer}
            </div>
          )}
        </div>
      )}
      
      {children}
    </article>
  );
};

export default Card; 