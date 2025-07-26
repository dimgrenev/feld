import React from 'react';
import './Form.css';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  id?: string;
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}

export const Form: React.FC<FormProps> = ({ 
  id,
  children,
  onSubmit,
  className,
  ...rest 
}) => {
  const formClasses = [
    'feld-form',
    className
  ].filter(Boolean).join(' ');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={formClasses}
      data-testid={id}
      data-feld-id={id}
      data-feld-type="form"
      {...rest}
    >
      {children}
    </form>
  );
};

export default Form;
