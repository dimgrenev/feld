import React from 'react';
import './Text.css';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  text: string;
  variant?: 'body-primary' | 'body-secondary' | 'heading-primary' | 'heading-secondary' | 'subheading-primary' | 'subheading-secondary' | 'caption-primary' | 'caption-secondary' | 'label-primary' | 'label-secondary' | 'success' | 'warning' | 'error';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right' | 'justify';
  truncate?: boolean;
  maxLines?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ 
  id,
  text,
  variant = 'body-primary',
  weight = 'normal',
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
    `feld-text--${weight}`,
    `feld-text--align-${align}`,
    truncate && 'feld-text--truncate',
    className
  ].filter(Boolean).join(' ');

  const style: React.CSSProperties = {
    ...props.style
  };

  if (maxLines && maxLines > 1) {
    style.display = '-webkit-box';
    (style as any).webkitLineClamp = maxLines;
    (style as any).webkitBoxOrient = 'vertical';
    style.overflow = 'hidden';
  }

  return (
    <Component
      id={id}
      className={textClasses}
      style={style}
      {...(props as any)}
    >
      {text}
    </Component>
  );
};

export default Text;