import React from 'react';
import './Layout.css';

export interface LayoutProps {
  id?: string;
  header?: React.ReactNode;
  main: React.ReactNode;
  side?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'sidebar' | 'header-footer';
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ 
  id,
  header,
  main,
  side,
  footer,
  variant = 'default',
  className,
  ...rest 
}) => {
  const layoutClasses = [
    'feld-layout',
    `feld-layout--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={layoutClasses}
      data-testid={id}
      data-feld-id={id}
      data-feld-type="layout"
      {...rest}
    >
      {header && (
        <header className="feld-layout-header">
          {header}
        </header>
      )}
      
      <div className="feld-layout-body">
        {side && (
          <aside className="feld-layout-side">
            {side}
          </aside>
        )}
        
        <main className="feld-layout-main">
          {main}
        </main>
      </div>
      
      {footer && (
        <footer className="feld-layout-footer">
          {footer}
        </footer>
      )}
    </div>
  );
};

export default Layout;
