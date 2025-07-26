import React from 'react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
  hint?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  autocomplete?: string;
  flow?: 'vertical' | 'horizontal';
  className?: string;
}

export const Input: React.FC<InputProps> = ({ 
  id,
  label, 
  placeholder, 
  type = 'text', 
  value, 
  flow = 'vertical',
  required = false,
  disabled = false,
  readOnly = false,
  error,
  hint,
  maxLength,
  minLength,
  pattern,
  autocomplete,
  className,
  ...props 
}) => {
  const inputId = id || `input-${label || placeholder || 'field'}`;

  const wrapperClasses = [
    'feld-input-wrapper',
    'text-m',
    flow === 'horizontal' ? 'flow-horizontal' : '',
    error ? 'feld-input-wrapper--error' : '',
  ].filter(Boolean).join(' ');

  const inputClasses = [
    'feld-input',
    'text-m',
    'feld-level-0',
    error ? 'feld-input--error' : '',
    className || '',
  ].filter(Boolean).join(' ');

  return (
    <label htmlFor={inputId} className={wrapperClasses}>
      {label && (
        <span className="feld-label">
          {label}
          {required && <span className="feld-label__required">*</span>}
        </span>
      )}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        autoComplete={autocomplete}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        {...props}
        className={inputClasses}
      />
      {error && (
        <span id={`${inputId}-error`} className="feld-input__error">
          {error}
        </span>
      )}
      {hint && !error && (
        <span id={`${inputId}-hint`} className="feld-input__hint">
          {hint}
        </span>
      )}
    </label>
  );
};

export default Input; 