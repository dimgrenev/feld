import React, { useState, useEffect, useRef } from 'react';
import './Select.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  id?: string;
  label?: string;
  options: SelectOption[];
  value?: string;
  values?: string[];
  multiple?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (value: string | string[]) => void;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ 
  id,
  label,
  options,
  value,
  values,
  multiple = false,
  disabled = false,
  placeholder = 'Выберите опцию',
  onChange,
  className,
  ...rest 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectId = id || `select-${label?.replace(/\s+/g, '-') || 'default'}`;

  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (optionValue: string) => {
    if (multiple) {
      const newValues = values?.includes(optionValue)
        ? values.filter(v => v !== optionValue)
        : [...(values || []), optionValue];
      onChange?.(newValues || []);
    } else {
      onChange?.(optionValue);
      setIsOpen(false);
    }
  };

  const getSelectedLabel = () => {
    if (multiple) {
      const selectedOptions = options.filter(op => values?.includes(op.value));
      return selectedOptions.length > 0 
        ? selectedOptions.map(op => op.label).join(', ')
        : placeholder;
    } else {
      return options.find(op => op.value === value)?.label || placeholder;
    }
  };

  const selectClasses = [
    'feld-select',
    disabled && 'feld-select--disabled',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={selectClasses} ref={wrapperRef}>
      {label && (
        <label htmlFor={selectId} className="feld-select-label">
          {label}
        </label>
      )}
      
      <div className="feld-select-wrapper">
        <button
          type="button"
          id={selectId}
          className="feld-select-trigger"
          disabled={disabled}
          onClick={handleSelectClick}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          {...rest}
        >
          <span className="feld-select-value">{getSelectedLabel()}</span>
          <span className="feld-select-arrow" />
        </button>
        
        {isOpen && (
          <div className="feld-select-dropdown">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`feld-select-option ${
                  multiple 
                    ? values?.includes(option.value) ? 'feld-select-option--selected' : ''
                    : value === option.value ? 'feld-select-option--selected' : ''
                }`}
                disabled={option.disabled}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select; 