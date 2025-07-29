import React from 'react';
import './List.css';

export interface ListItem {
  id: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export interface ListProps {
  id?: string;
  items: ListItem[];
  variant?: 'default' | 'bordered' | 'striped';
  className?: string;
}

export const List: React.FC<ListProps> = ({ 
  id,
  items,
  variant = 'default',
  className,
  ...rest 
}) => {
  const listClasses = [
    'feld-list',
    `feld-list--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={listClasses}
      id={id}
      {...rest}
    >
      {items.map((item) => (
        <div key={item.id} className="feld-list-item">
          {item.icon && (
            <div className="feld-list-icon">{item.icon}</div>
          )}
          <div className="feld-list-content">{item.content}</div>
          {item.action && (
            <div className="feld-list-action">{item.action}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default List; 