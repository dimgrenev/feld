import React from 'react';
import { ProgressSpec } from './spec';
import './Progress.css';

const Progress: React.FC<ProgressSpec> = ({ value = 0, max = 100, label, ...rest }) => {
  const percentage = max > 0 ? (value / max) * 100 : 0;

  return (
    <div className="feld-progress-container" {...rest}>
      {label && <span className="feld-progress-label">{label}</span>}
      <div
        className="feld-progress-bar"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className="feld-progress-indicator"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
