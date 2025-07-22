import React, { useState } from 'react';
import { TabsSpec } from './spec';
import { React.Fragment } from '../types';
import { UserComponent } from '../types';
import { UserFace } from '../types';
import './Tabs.css';

const Tabs: React.FC<TabsSpec> = ({ items, ...rest }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="feld-tabs" {...rest}>
      {items && (
        <>
          <div className="feld-tabs-header">
            {items.map((item, index) => (
              <button
                key={item.title}
                className={`feld-tab-button ${index === activeTab ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="feld-tabs-content">
            {items[activeTab] && items[activeTab].content && items[activeTab].content.map((spec: UserFace) => (
              <UserComponent key={spec.id} face={spec}>
                <React.Fragment />
              </UserComponent>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Tabs;
