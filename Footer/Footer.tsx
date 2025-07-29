import React from 'react';
import './Footer.css';

export interface FooterProps {
  id?: string;
  children: React.ReactNode;
  variant?: 'default' | 'minimal' | 'full';
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ 
  id,
  children,
  variant = 'default',
  className,
  ...rest 
}) => {
  const footerClasses = [
    'feld-footer',
    `feld-footer--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <footer 
      className={footerClasses}
      
      
      
      {...rest}
    >
      {children}
    </footer>
  );
};

export default Footer;
