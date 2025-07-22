import React from 'react';
import { LayoutSpec } from './spec';
import { React.Fragment } from '../types';
import { UserComponent } from '../types';
import { UserFace } from '../types';
import './Layout.css';

const Layout: React.FC<LayoutSpec> = ({ header, main, side, footer, ...rest }) => {
  return (
    <div className="feld-layout" {...rest}>
      {header && (
        <header className="feld-layout-header">
          <UserComponent face={header}>
            <React.Fragment />
          </UserComponent>
        </header>
      )}
      <div className="feld-layout-body">
        <main className="feld-layout-main">
          {main && main.map((spec: UserFace) => (
            <UserComponent key={spec.id} face={spec}>
              <React.Fragment />
            </UserComponent>
          ))}
        </main>
        {side && (
          <aside className="feld-layout-sidebar">
            <UserComponent face={side}>
              <React.Fragment />
            </UserComponent>
          </aside>
        )}
      </div>
      {footer && (
        <footer className="feld-layout-footer">
          <UserComponent face={footer}>
            <React.Fragment />
          </UserComponent>
        </footer>
      )}
    </div>
  );
};

export default Layout;
