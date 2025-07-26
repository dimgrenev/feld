import React, { useRef, useEffect } from 'react';
import './Textarea.css';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  flow?: 'vertical' | 'horizontal';
  autoResize?: boolean;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ 
  id,
  label,
  placeholder,
  value,
  flow = 'vertical',
  autoResize = true,
  className,
  ...props 
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const textareaId = id || `textarea-${label || placeholder || 'field'}`;

  useEffect(() => {
    if (!autoResize) return;
    
    const textareaElement = textareaRef.current;
    if (textareaElement) {
      textareaElement.style.height = 'auto';
      textareaElement.style.height = `${textareaElement.scrollHeight}px`;
    }
  }, [value, autoResize]);

  const wrapperClasses = [
    'feld-textarea-wrapper',
    'text-m',
    flow === 'horizontal' ? 'flow-horizontal' : '',
    className
  ].filter(Boolean).join(' ');

  const textareaClasses = [
    'feld-textarea',
    'text-m',
    'feld-level-0'
  ].filter(Boolean).join(' ');

  return (
    <label htmlFor={textareaId} className={wrapperClasses}>
      {label && <span className="feld-label">{label}</span>}
      <textarea
        ref={textareaRef}
        id={textareaId}
        placeholder={placeholder}
        rows={1}
        value={value}
        data-testid={id}
        data-feld-id={id}
        data-feld-type="textarea"
        className={textareaClasses}
        {...props}
      />
    </label>
  );
};

export default Textarea; 