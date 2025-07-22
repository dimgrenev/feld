import React from 'react';
import { TextSpec } from './spec';

const Text: React.FC<TextSpec> = ({
  as: Component = 'p',
  content,
  className,
  ...rest
}) => {
  if (!content) {
    return null;
  }

  return <Component className={className} {...rest}>{content}</Component>;
};

export default Text;
