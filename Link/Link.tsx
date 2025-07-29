import React from 'react';
import './Link.css';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  id?: string;
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'underline';
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ 
  id,
  href, 
  children,
  variant = 'default',
  target,
  rel,
  className,
  ...rest 
}) => {
  const linkClasses = [
    'feld-link',
    `feld-link--${variant}`,
    className
  ].filter(Boolean).join(' ');

  const linkRel = target === '_blank' ? 'noopener noreferrer' : rel;

  return (
    <a
      href={href}
      target={target}
      rel={linkRel}
      className={linkClasses}
      
      
      
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link; 