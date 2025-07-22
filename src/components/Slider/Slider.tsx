import React from 'react';
import { SliderSpec } from './spec';
import './Slider.css';

const Slider: React.FC<SliderSpec> = ({
  id,
  min = 0,
  max = 100,
  step = 1,
  value = 50,
  label,
  onChange,
  ...rest
}) => {
  return (
    <div className="feld-slider-container" {...rest}>
      {label && <label htmlFor={id} className="feld-slider-label">{label}</label>}
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={value}
        className="feld-slider"
        onChange={onChange}
      />
    </div>
  );
};

export default Slider;
