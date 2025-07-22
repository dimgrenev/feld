import React from 'react';
import { ArticleSpec } from './spec';
import { React.Fragment } from '../types';
import { UserComponent } from '../types';
import { UserFace } from '../types';
import './Article.css';

const Article: React.FC<ArticleSpec> = ({ title, content, ...rest }) => {
  return (
    <article className="feld-article" {...rest}>
      {title && <h1>{title}</h1>}
      {Array.isArray(content) ? (
        content.map((spec: UserFace) => (
          <UserComponent key={spec.id} face={spec}>
            <React.Fragment />
          </UserComponent>
        ))
      ) : (
        content
      )}
    </article>
  );
};

export default Article;
