import React from 'react';
import './Progress.css';

export interface ProgressProps {
  id?: string;
  value?: number;
  max?: number;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({ 
  id,
  value = 0, 
  max = 100,
  variant = 'default',
  size = 'medium',
  showLabel = false,
  className,
  ...rest 
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const progressClasses = [
    'feld-progress',
    `feld-progress--${variant}`,
    `feld-progress--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={progressClasses}
      data-testid={id}
      data-feld-id={id}
      data-feld-type="progress"
      {...rest}
    >
      <div className="feld-progress-bar">
        <div 
          className="feld-progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="feld-progress-label">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
};

export default Progress; 