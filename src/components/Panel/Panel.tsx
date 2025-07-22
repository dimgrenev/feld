import React from 'react';
import { PanelSpec } from './spec';
import './Panel.css';
import { React.Fragment } from '../types';
import { UserComponent } from '../types';

const Panel: React.FC<PanelSpec> = ({ variant = 'default', children, ...rest }) => {
  const className = `feld-panel feld-panel-${variant}`;

  return (
    <div className={className} {...rest}>
      <UserComponent face={children}>
        <React.Fragment />
      </UserComponent>
    </div>
  );
};

export default Panel;
