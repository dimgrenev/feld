import React from 'react';
import { InputSpec } from './spec';
import './Input.css';

const Input: React.FC<InputSpec> = ({
  id,
  value,
  placeholder,
  type = 'text',
  onChange,
  className,
  ...rest
}) => {
  return (
    <input
      id={id}
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`feld-input ${className || ''}`}
      data-testid={id}
      {...rest}
    />
  );
};

export default Input;
