import React from 'react';
import './Article.css';

export interface ArticleProps {
  id?: string;
  title?: string;
  content: React.ReactNode;
  author?: string;
  date?: string;
  variant?: 'default' | 'card' | 'minimal';
  className?: string;
}

export const Article: React.FC<ArticleProps> = ({ 
  id,
  title,
  content,
  author,
  date,
  variant = 'default',
  className,
  ...rest 
}) => {
  const articleClasses = [
    'feld-article',
    `feld-article--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <article 
      className={articleClasses}
      
      
      
      {...rest}
    >
      {title && (
        <header className="feld-article-header">
          <h1 className="feld-article-title">{title}</h1>
          {(author || date) && (
            <div className="feld-article-meta">
              {author && <span className="feld-article-author">{author}</span>}
              {date && <span className="feld-article-date">{date}</span>}
            </div>
          )}
        </header>
      )}
      
      <div className="feld-article-content">
        {content}
      </div>
    </article>
  );
};

export default Article;
