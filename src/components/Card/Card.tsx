import React from 'react';
import { React.Fragment } from '../types';
import { UserComponent } from '../types';
import { CardSpec } from './spec';
import './Card.css';

const Card: React.FC<CardSpec> = ({
  id,
  variant = 'default',
  media,
  header,
  content,
  footer,
  ...rest
}) => {
  const cardClass = `feld-card feld-card--${variant}`;

  const renderChildren = (specs: CardSpec['media']) => {
    if (!specs) return null;
    return specs.map((spec) => (
      <UserComponent key={spec.id} face={spec}>
        <React.Fragment />
      </UserComponent>
    ));
  };

  return (
    <div id={id} className={cardClass} {...rest}>
      {media && <div className="feld-card-media">{renderChildren(media)}</div>}
      {header && <div className="feld-card-header">{renderChildren(header)}</div>}
      {content && <div className="feld-card-content">{renderChildren(content)}</div>}
      {footer && <div className="feld-card-footer">{renderChildren(footer)}</div>}
    </div>
  );
};

export default Card;
