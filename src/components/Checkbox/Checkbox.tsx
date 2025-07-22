import React from 'react';
import { CheckboxSpec } from './spec';
import './Checkbox.css';

const Checkbox: React.FC<CheckboxSpec> = ({
  id,
  label,
  checked = false,
  onChange,
  ...rest
}) => {
  return (
    <div className="feld-checkbox-wrapper">
      <input
        id={id}
        type="checkbox"
        defaultChecked={checked}
        onChange={onChange}
        className="feld-checkbox"
        {...rest}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default Checkbox;
