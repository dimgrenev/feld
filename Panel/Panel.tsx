import React from 'react';
import './Panel.css';

export interface PanelProps {
  id?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
}

export const Panel: React.FC<PanelProps> = ({ 
  id,
  variant = 'default',
  size = 'medium',
  children,
  className,
  ...rest 
}) => {
  const panelClasses = [
    'feld-panel',
    `feld-panel--${variant}`,
    `feld-panel--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={panelClasses}
      data-testid={id}
      data-feld-id={id}
      data-feld-type="panel"
      {...rest}
    >
      {children}
    </div>
  );
};

export default Panel; 