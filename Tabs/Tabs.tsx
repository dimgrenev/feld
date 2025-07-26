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
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ 
  id,
  tabs,
  defaultActiveTab,
  variant = 'default',
  size = 'medium',
  className,
  ...rest 
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id || '');

  const tabsClasses = [
    'feld-tabs',
    `feld-tabs--${variant}`,
    `feld-tabs--${size}`,
    className
  ].filter(Boolean).join(' ');

  const handleTabClick = (tabId: string) => {
    const tab = tabs.find(t => t.id === tabId);
    if (tab && !tab.disabled) {
      setActiveTab(tabId);
    }
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div 
      className={tabsClasses}
      data-testid={id}
      data-feld-id={id}
      data-feld-type="tabs"
      {...rest}
    >
      <div className="feld-tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`feld-tab-button ${
              activeTab === tab.id ? 'feld-tab-button--active' : ''
            } ${tab.disabled ? 'feld-tab-button--disabled' : ''}`}
            onClick={() => handleTabClick(tab.id)}
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