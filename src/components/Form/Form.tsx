import React from 'react';
import { FormSpec } from './spec';
import { React.Fragment } from '../types';
import { UserComponent } from '../types';
import { UserFace } from '../types';
import './Form.css';

const Form: React.FC<FormSpec> = ({ children, onSubmit, ...rest }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form className="feld-form" onSubmit={handleSubmit} {...rest}>
      {Array.isArray(children) ? (
        children.map((child: UserFace) => (
          <UserComponent key={child.id} face={child}>
            <React.Fragment />
          </UserComponent>
        ))
      ) : (
        children
      )}
    </form>
  );
};

export default Form;
