import React, { useState } from 'react';
import './Filter.css';

export interface FilterField {
  id: string;
  label: string;
  type: 'text' | 'select' | 'checkbox' | 'radio' | 'date';
  options?: Array<{ value: string; label: string }>;
  placeholder?: string;
}

export interface FilterProps {
  id?: string;
  fields: FilterField[];
  onFilterChange?: (filters: Record<string, any>) => void;
  variant?: 'default' | 'compact' | 'expanded';
  className?: string;
}

export const Filter: React.FC<FilterProps> = ({ 
  id,
  fields,
  onFilterChange,
  variant = 'default',
  className,
  ...rest 
}) => {
  const [filters, setFilters] = useState<Record<string, any>>({});

  const handleFilterChange = (fieldId: string, value: any) => {
    const newFilters = { ...filters, [fieldId]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const filterClasses = [
    'feld-filter',
    `feld-filter--${variant}`,
    className
  ].filter(Boolean).join(' ');

  const renderField = (field: FilterField) => {
    switch (field.type) {
      case 'text':
        return (
          <input
            type="text"
            placeholder={field.placeholder}
            value={filters[field.id] || ''}
            onChange={(e) => handleFilterChange(field.id, e.target.value)}
            className="feld-filter-input"
          />
        );
      case 'select':
        return (
          <select
            value={filters[field.id] || ''}
            onChange={(e) => handleFilterChange(field.id, e.target.value)}
            className="feld-filter-select"
          >
            <option value="">{field.placeholder || 'Select...'}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'checkbox':
        return (
          <label className="feld-filter-checkbox">
            <input
              type="checkbox"
              checked={filters[field.id] || false}
              onChange={(e) => handleFilterChange(field.id, e.target.checked)}
            />
            <span>{field.label}</span>
          </label>
        );
      case 'radio':
        return (
          <div className="feld-filter-radio-group">
            {field.options?.map((option) => (
              <label key={option.value} className="feld-filter-radio">
                <input
                  type="radio"
                  name={field.id}
                  value={option.value}
                  checked={filters[field.id] === option.value}
                  onChange={(e) => handleFilterChange(field.id, e.target.value)}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        );
      case 'date':
        return (
          <input
            type="date"
            value={filters[field.id] || ''}
            onChange={(e) => handleFilterChange(field.id, e.target.value)}
            className="feld-filter-input"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={filterClasses}
      
      
      
      {...rest}
    >
      {fields.map((field) => (
        <div key={field.id} className="feld-filter-field">
          <label className="feld-filter-label">{field.label}</label>
          {renderField(field)}
        </div>
      ))}
    </div>
  );
};

export default Filter; 