import React from 'react';
import './Container.css';

export interface ContainerProps {
  id?: string;
  as?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  id,
  as: Component = 'div',
  children,
  className,
  ...rest
}) => {
  const containerClasses = [
    'feld-container',
    'feld-level-0',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component
      className={containerClasses}
      data-testid={id}
      data-feld-id={id}
      data-feld-type="container"
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Container; 