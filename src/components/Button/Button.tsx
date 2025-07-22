import React from 'react';
import { ButtonSpec } from './spec';
// import { useFeldEngine } from '@/core/useFeldEngine';

const Button: React.FC<ButtonSpec> = ({ id, children, variant = 'primary', events, onClick, ...rest }) => {
  // const { engine } = useFeldEngine();

  const handleClick = () => {
    if (events?.onClick) {
      // engine.emit(events.onClick, { id });
    }
  };

  return (
    <button
      className={`feld-button feld-button-${variant}`}
      onClick={onClick || handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;