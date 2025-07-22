import React, { useState } from 'react';
import { React.Fragment } from '@/core/React.Fragment';
import { AccordionSpec, AccordionItem } from './spec';
import './Accordion.css';

export const Accordion: React.FC<AccordionSpec> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="feld-accordion">
      {items.map((item: AccordionItem, index: number) => (
        <div className="feld-accordion-item" key={item.title}>
          <button
            className="feld-accordion-title"
            onClick={() => handleToggle(index)}
            aria-expanded={activeIndex === index}
          >
            {item.title}
          </button>
          {activeIndex === index && (
            <div className="feld-accordion-content">
              {item.content.map((contentItem, contentIndex) => (
                <React.Fragment key={contentIndex} face={contentItem} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};