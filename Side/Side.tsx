import React from 'react';
import './Side.css';

export interface SideProps {
  id?: string;
  children: React.ReactNode;
  position?: 'left' | 'right';
  width?: string;
  className?: string;
}

export const Side: React.FC<SideProps> = ({ 
  id,
  children,
  position = 'left',
  width = '250px',
  className,
  ...rest 
}) => {
  const sideClasses = [
    'feld-side',
    `feld-side--${position}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <aside 
      className={sideClasses}
      style={{ width }}
      data-testid={id}
      data-feld-id={id}
      data-feld-type="side"
      {...rest}
    >
      {children}
    </aside>
  );
};

export default Side; 