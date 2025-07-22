import React from 'react';
import { CodeSpec } from './spec';
import './Code.css';

const Code: React.FC<CodeSpec> = ({ content, language, ...rest }) => {
  if (!content) {
    return null;
  }

  const className = `language-${language}`;

  return (
    <pre className="feld-code-pre" {...rest}>
      <code className={className}>{content}</code>
    </pre>
  );
};

export default Code;
