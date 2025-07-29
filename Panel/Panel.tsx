import React from 'react';
import './Panel.css';

export interface PanelProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
}

export const Panel: React.FC<PanelProps> = ({ 
  id,
  title,
  children,
  variant = 'default',
  className,
  ...rest 
}) => {
  const panelClasses = [
    'feld-panel',
    `feld-panel--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={panelClasses}
      id={id}
      {...rest}
    >
      {title && (
        <div className="feld-panel-header">
          <h3 className="feld-panel-title">{title}</h3>
        </div>
      )}
      <div className="feld-panel-content">
        {children}
      </div>
    </div>
  );
};

export default Panel; 