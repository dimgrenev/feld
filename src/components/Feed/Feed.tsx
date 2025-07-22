import React from 'react';
import { FeedSpec } from './spec';
import { React.Fragment } from '../types';
import { UserComponent } from '../types';
import { UserFace } from '../types';
import './Feed.css';

const Feed: React.FC<FeedSpec> = ({ items, ...rest }) => {
  return (
    <div className="feld-feed" {...rest}>
      {items && items.map((spec: UserFace) => (
        <div key={spec.id} className="feld-feed-item">
          <UserComponent face={spec}>
            <React.Fragment />
          </UserComponent>
        </div>
      ))}
    </div>
  );
};

export default Feed;
