import React from 'react';
import { LinkSpec } from './spec';
import './Link.css';

const Link: React.FC<LinkSpec> = ({ href, children, ...rest }) => {
  return (
    <a href={href} className="feld-link" {...rest}>
      {children}
    </a>
  );
};

export default Link;
