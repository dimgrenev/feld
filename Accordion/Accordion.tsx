import React from 'react';
import './Accordion.css';

export interface AccordionItem {
  summary: string;
  content: React.ReactNode;
  isOpen?: boolean;
}

export interface AccordionProps {
  id?: string;
  items: AccordionItem[];
  variant?: 'plus' | 'arrow';
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ 
  id,
  items, 
  variant = 'plus',
  className,
  ...rest 
}) => {
  const detailsRefs = React.useRef<(HTMLDetailsElement | null)[]>([]);

  const handleSummaryClick = (e: React.MouseEvent<HTMLElement>, index: number) => {
    e.preventDefault();
    const detailsElement = detailsRefs.current[index];
    if (!detailsElement) return;

    // For the "arrow" variant, we want instant open/close with no animation.
    // The browser handles this natively when we just toggle the 'open' attribute.
    if (variant === 'arrow') {
        detailsElement.toggleAttribute('open');
        return;
    }

    // Existing animation logic for "plus" variant
    const contentElement = detailsElement.querySelector<HTMLElement>('.feld-accordion-content');
    if (!contentElement) return;

    if (detailsElement.hasAttribute('open')) {
      // Closing animation
      const startHeight = `${contentElement.scrollHeight}px`;
      requestAnimationFrame(() => {
        contentElement.style.maxHeight = startHeight;
        requestAnimationFrame(() => {
          contentElement.style.maxHeight = '0px';
        });
      });

      const onTransitionEnd = () => {
        detailsElement.removeAttribute('open');
        contentElement.removeEventListener('transitionend', onTransitionEnd);
      };
      contentElement.addEventListener('transitionend', onTransitionEnd);

    } else {
      // Opening animation
      detailsElement.setAttribute('open', '');
      const endHeight = `${contentElement.scrollHeight}px`;
      contentElement.style.maxHeight = endHeight;

      const onTransitionEnd = () => {
        contentElement.style.maxHeight = ''; // Remove inline style after animation
        contentElement.removeEventListener('transitionend', onTransitionEnd);
      };
      contentElement.addEventListener('transitionend', onTransitionEnd);
    }
  };

  const accordionClasses = [
    'feld-accordion',
    'text-m',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={accordionClasses} 
      data-variant={variant}
      data-testid={id}
      data-feld-id={id}
      data-feld-type="accordion"
      {...rest}
    >
      {items.map((item, index) => (
        <details
          key={index}
          className="feld-accordion-item"
          open={item.isOpen}
          ref={(el) => {
            detailsRefs.current[index] = el;
          }}
        >
          <summary className="feld-accordion-summary" onClick={(e) => handleSummaryClick(e, index)}>
            {item.summary}
            <div className="feld-accordion-icon" />
          </summary>
          <div className="feld-accordion-content">
            <div className="feld-accordion-content-inner feld-level-0">
              {item.content}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
};

export default Accordion;