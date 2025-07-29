import React from 'react';
import './Table.css';

export interface TableColumn {
  key: string;
  header: string;
  render?: (value: any, row: any) => React.ReactNode;
}

export interface TableProps {
  id?: string;
  columns: TableColumn[];
  data: any[];
  variant?: 'default' | 'striped' | 'bordered';
  className?: string;
}

export const Table: React.FC<TableProps> = ({ 
  id,
  columns,
  data,
  variant = 'default',
  className,
  ...rest 
}) => {
  const tableClasses = [
    'feld-table',
    `feld-table--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="feld-table-container">
      <table 
        className={tableClasses}
        id={id}
        {...rest}
      >
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="feld-table-header">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="feld-table-row">
              {columns.map((column) => (
                <td key={column.key} className="feld-table-cell">
                  {column.render 
                    ? column.render(row[column.key], row)
                    : row[column.key]
                  }
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