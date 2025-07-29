import React from 'react';
import './Checkbox.css';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ 
  id,
  label, 
  checked, 
  disabled,
  required,
  className,
  ...rest 
}) => {
  const checkboxClasses = [
    'feld-checkbox-label',
    className
  ].filter(Boolean).join(' ');

  return (
    <label className={checkboxClasses}>
      <input 
        type="checkbox" 
        id={id}
        checked={checked}
        disabled={disabled}
        required={required}
        
        
        
        {...rest} 
      />
      <span className="feld-checkbox-text">{label}</span>
    </label>
  );
};

export default Checkbox; 