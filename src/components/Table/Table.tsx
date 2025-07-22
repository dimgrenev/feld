import React from 'react';
import { TableSpec } from './spec';
import { React.Fragment } from '../types';
import { UserComponent } from '../types';
import { UserFace } from '../types';
import './Table.css';

const Table: React.FC<TableSpec> = ({ headers, rows, ...rest }) => {
  return (
    <table className="feld-table" {...rest}>
      {headers && (
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
      )}
      {rows && (
        <tbody>
          {rows.map((row: UserFace[], rowIndex: number) => (
            <tr key={rowIndex}>
              {row.map((cell: UserFace, cellIndex: number) => (
                <td key={cellIndex}>
                  <UserComponent face={cell}>
                    <React.Fragment />
                  </UserComponent>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};

export default Table;
