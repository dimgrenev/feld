import React from 'react';
import { SideSpec } from './spec';
import { React.Fragment } from '../types';
import { UserComponent } from '../types';
import { UserFace } from '../types';
import './Side.css';

const Side: React.FC<SideSpec> = ({ position = 'right', children, ...rest }) => {
  const className = `feld-side feld-side-${position}`;

  return (
    <aside className={className} {...rest}>
      {Array.isArray(children) ? (
        children.map((childSpec: UserFace) => (
          <UserComponent key={childSpec.id} face={childSpec}>
            <React.Fragment />
          </UserComponent>
        ))
      ) : (
        children
      )}
    </aside>
  );
};

export default Side;
