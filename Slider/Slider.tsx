import React from 'react';
import './Slider.css';

export interface SliderProps {
  id?: string;
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
  className?: string;
}

export const Slider: React.FC<SliderProps> = ({ 
  id,
  min = 0, 
  max = 100, 
  value = 0,
  step = 1,
  disabled = false,
  onChange,
  className,
  ...rest 
}) => {
  const sliderClasses = [
    'feld-slider',
    disabled && 'feld-slider--disabled',
    className
  ].filter(Boolean).join(' ');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(Number(event.target.value));
    }
  };

  return (
    <div 
      className={sliderClasses}
      
      
      
      {...rest}
    >
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        disabled={disabled}
        onChange={handleChange}
        className="feld-slider-input"
      />
      <div className="feld-slider-value">{value}</div>
    </div>
  );
};

export default Slider; 