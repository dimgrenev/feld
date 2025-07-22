import React from 'react';
import { FooterSpec } from './spec';
import './Footer.css';

const Footer: React.FC<FooterSpec> = ({ sections, ...rest }) => {
  return (
    <footer className="feld-footer" {...rest}>
      {sections && sections.map((section) => (
        <div key={section.id} className="feld-footer-section">
          {section.title && <h4>{section.title}</h4>}
          {section.links && (
            <ul className="feld-footer-links">
              {section.links.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
