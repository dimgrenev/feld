import React from 'react';
import './Progress.css';

export interface ProgressProps {
  id?: string;
  value: number;
  max?: number;
  variant?: 'default' | 'success' | 'warning' | 'error';
  showLabel?: boolean;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({ 
  id,
  value,
  max = 100,
  variant = 'default',
  showLabel = false,
  className,
  ...rest 
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const progressClasses = [
    'feld-progress',
    `feld-progress--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={progressClasses}
      id={id}
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