import React from 'react';
import './Feed.css';

export interface FeedItem {
  id: string;
  title?: string;
  content: React.ReactNode;
  timestamp?: string;
  author?: string;
  avatar?: string;
}

export interface FeedProps {
  id?: string;
  items: FeedItem[];
  variant?: 'default' | 'timeline' | 'card';
  className?: string;
}

export const Feed: React.FC<FeedProps> = ({ 
  id,
  items,
  variant = 'default',
  className,
  ...rest 
}) => {
  const feedClasses = [
    'feld-feed',
    `feld-feed--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={feedClasses}
      id={id}
      {...rest}
    >
      {items.map((item) => (
        <div key={item.id} className="feld-feed-item">
          {item.avatar && (
            <div className="feld-feed-avatar">
              <img src={item.avatar} alt={item.author || ''} />
            </div>
          )}
          <div className="feld-feed-content">
            {item.title && (
              <div className="feld-feed-title">{item.title}</div>
            )}
            <div className="feld-feed-body">{item.content}</div>
            {(item.author || item.timestamp) && (
              <div className="feld-feed-meta">
                {item.author && <span className="feld-feed-author">{item.author}</span>}
                {item.timestamp && <span className="feld-feed-timestamp">{item.timestamp}</span>}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
