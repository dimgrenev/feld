import React from 'react';
import { RadioSpec } from './spec';
import './Radio.css';

const Radio: React.FC<RadioSpec> = ({
  id,
  label,
  name,
  value,
  checked,
  disabled,
  onChange,
  ...rest
}) => {
  return (
    <label className="feld-radio-label" {...rest}>
      <input
        type="radio"
        className="feld-radio-input"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <span className="feld-radio-text">{label}</span>
    </label>
  );
};

export default Radio;
