import React, { useState } from 'react';
import { FilterSpec } from './spec';
import './Filter.css';
import { React.Fragment } from '../types';
import { UserComponent } from '../types';

const Filter: React.FC<FilterSpec> = ({ data, fields, children, ...rest }) => {
  const [query, setQuery] = useState('');

  const filteredData = data && fields ? data.filter((item: any) => {
    return fields.some((field: string) => {
      const value = item[field];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(query.toLowerCase());
      }
      return false;
    });
  }) : [];

  return (
    <div className="filter-container" {...rest}>
      <input
        type="text"
        className="filter-input"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {children && (
        <UserComponent face={children(filteredData)}>
          <React.Fragment />
        </UserComponent>
      )}
    </div>
  );
};

export default Filter;
