import React, { useState } from 'react';
import './Tabs.css';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  id?: string;
  tabs: TabItem[];
  defaultActiveTab?: string;
  variant?: 'default' | 'pills' | 'underline';
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ 
  id,
  tabs,
  defaultActiveTab,
  variant = 'default',
  className,
  ...rest 
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  const tabsClasses = [
    'feld-tabs',
    `feld-tabs--${variant}`,
    className
  ].filter(Boolean).join(' ');

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div 
      className={tabsClasses}
      id={id}
      {...rest}
    >
      <div className="feld-tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`feld-tabs-tab ${activeTab === tab.id ? 'feld-tabs-tab--active' : ''} ${tab.disabled ? 'feld-tabs-tab--disabled' : ''}`}
            onClick={() => !tab.disabled && setActiveTab(tab.id)}
            disabled={tab.disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="feld-tabs-content">
        {activeTabContent}
      </div>
    </div>
  );
};

export default Tabs; 