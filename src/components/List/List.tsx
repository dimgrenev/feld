import React from 'react';
import { ListSpec } from './spec';
import { React.Fragment } from '../types';
import { UserComponent } from '../types';
import { UserFace } from '../types';
import './List.css';

const List: React.FC<ListSpec> = ({ items, ordered = false, ...rest }) => {
  const ListTag = ordered ? 'ol' : 'ul';
  const listClassName = `feld-list ${ordered ? 'feld-list-ordered' : 'feld-list-unordered'}`;

  return (
    <ListTag className={listClassName} {...rest}>
      {items && items.map((item: UserFace) => (
        <li key={item.id} className="feld-list-item">
          <UserComponent face={item}>
            <React.Fragment />
          </UserComponent>
        </li>
      ))}
    </ListTag>
  );
};

export default List;
