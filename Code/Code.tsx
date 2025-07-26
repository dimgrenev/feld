import React from 'react';
import './Code.css';

export interface CodeProps {
  id?: string;
  code: string;
  language?: string;
  theme?: 'light' | 'dark';
  showLineNumbers?: boolean;
  className?: string;
}

export const Code: React.FC<CodeProps> = ({ 
  id,
  code, 
  language = 'text',
  theme = 'light',
  showLineNumbers = false,
  className,
  ...rest 
}) => {
  const codeClasses = [
    'feld-code',
    `feld-code--${theme}`,
    showLineNumbers && 'feld-code--line-numbers',
    className
  ].filter(Boolean).join(' ');

  return (
    <pre 
      className={codeClasses}
      data-testid={id}
      data-feld-id={id}
      data-feld-type="code"
      data-language={language}
      {...rest}
    >
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default Code; 