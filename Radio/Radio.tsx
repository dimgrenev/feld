import React from 'react';
import './Radio.css';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioProps {
  id?: string;
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

export const Radio: React.FC<RadioProps> = ({ 
  id,
  name, 
  options, 
  value, 
  onChange,
  disabled,
  required,
  className,
  ...rest 
}) => {
  const radioClasses = [
    'feld-radio-group',
    className
  ].filter(Boolean).join(' ');

  const handleChange = (optionValue: string) => {
    if (!disabled && onChange) {
      onChange(optionValue);
    }
  };

  return (
    <div 
      className={radioClasses}
      data-testid={id}
      data-feld-id={id}
      data-feld-type="radio"
      {...rest}
    >
      {options.map((option) => (
        <label key={option.value} className="feld-radio-label">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            disabled={disabled || option.disabled}
            required={required}
            onChange={() => handleChange(option.value)}
            className="feld-radio-input"
          />
          <span className="feld-radio-text">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio; 