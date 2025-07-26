import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  text: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'danger' | 'ghost' | 'default' | 'outlined' | 'round';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  id,
  text, 
  variant = 'primary', 
  size = 'medium',
  fullWidth = false,
  textAlign = 'center',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  className,
  onClick,
  ...rest 
}) => {
  const buttonClasses = [
    'feld-button',
    'feld-level-0',
    'text-m',
    variant && `feld-button--${variant}`,
    size && `feld-button--${size}`,
    fullWidth && 'feld-button--stretch',
    textAlign && `feld-button--text-${textAlign}`,
    loading && 'feld-button--loading',
    disabled && 'feld-button--disabled',
    className
  ].filter(Boolean).join(' ');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button 
      className={buttonClasses}
      disabled={disabled || loading}
      data-testid={id}
      data-feld-id={id}
      data-feld-type="button"
      onClick={handleClick}
      {...rest}
    >
      {loading && (
        <span className="feld-button__spinner">
          <span className="feld-spinner feld-spinner--small" />
        </span>
      )}
      
      {icon && iconPosition === 'left' && (
        <span className="feld-button__icon feld-button__icon--left">
          {icon}
        </span>
      )}
      
      <span className="feld-button__text">
        {text}
      </span>
      
      {icon && iconPosition === 'right' && (
        <span className="feld-button__icon feld-button__icon--right">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;