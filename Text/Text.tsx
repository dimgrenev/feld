import React from 'react';
import './Text.css';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  text: string;
  variant?: 'body' | 'heading' | 'subheading' | 'caption' | 'label';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  align?: 'left' | 'center' | 'right' | 'justify';
  truncate?: boolean;
  maxLines?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ 
  id,
  text,
  variant = 'body',
  size = 'md',
  weight = 'normal',
  color = 'primary',
  align = 'left',
  truncate = false,
  maxLines,
  as: Component = 'p',
  className,
  ...props 
}) => {
  const textClasses = [
    'feld-text',
    `feld-text--${variant}`,
    `feld-text--${size}`,
    `feld-text--${weight}`,
    `feld-text--${color}`,
    `feld-text--align-${align}`,
    truncate && 'feld-text--truncate',
    className
  ].filter(Boolean).join(' ');

  const style: React.CSSProperties = {
    ...props.style
  };

  if (maxLines && maxLines > 1) {
    style.display = '-webkit-box';
    style.webkitLineClamp = maxLines;
    style.webkitBoxOrient = 'vertical';
    style.overflow = 'hidden';
  }

  return (
    <Component
      id={id}
      className={textClasses}
      style={style}
      {...props}
    >
      {text}
    </Component>
  );
};

export default Text;