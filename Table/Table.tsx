import React from 'react';
import './Table.css';

export interface TableColumn {
  key: string;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export interface TableRow {
  [key: string]: string | number | React.ReactNode;
}

export interface TableProps {
  id?: string;
  headers: TableColumn[];
  rows: TableRow[];
  variant?: 'default' | 'striped' | 'bordered';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Table: React.FC<TableProps> = ({ 
  id,
  headers, 
  rows,
  variant = 'default',
  size = 'medium',
  className,
  ...rest 
}) => {
  const tableClasses = [
    'feld-table',
    `feld-table--${variant}`,
    `feld-table--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className="feld-table-wrapper"
      data-testid={id}
      data-feld-id={id}
      data-feld-type="table"
      {...rest}
    >
      <table className={tableClasses}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th 
                key={header.key}
                style={{ 
                  width: header.width,
                  textAlign: header.align || 'left'
                }}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header) => (
                <td 
                  key={header.key}
                  style={{ textAlign: header.align || 'left' }}
                >
                  {row[header.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;