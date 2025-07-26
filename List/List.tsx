import React from 'react';
import './List.css';

export interface ListItem {
  id: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface ListProps {
  id?: string;
  items: ListItem[];
  variant?: 'default' | 'ordered' | 'unordered';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const List: React.FC<ListProps> = ({ 
  id,
  items,
  variant = 'unordered',
  size = 'medium',
  className,
  ...rest 
}) => {
  const listClasses = [
    'feld-list',
    `feld-list--${variant}`,
    `feld-list--${size}`,
    className
  ].filter(Boolean).join(' ');

  const ListComponent = variant === 'ordered' ? 'ol' : 'ul';

  return (
    <ListComponent 
      className={listClasses}
      data-testid={id}
      data-feld-id={id}
      data-feld-type="list"
      {...rest}
    >
      {items.map((item) => (
        <li 
          key={item.id}
          className={`feld-list-item ${item.disabled ? 'feld-list-item--disabled' : ''}`}
        >
          {item.content}
        </li>
      ))}
    </ListComponent>
  );
};

export default List; 