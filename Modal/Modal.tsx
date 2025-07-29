import React from 'react';
import './Modal.css';

export interface ModalProps {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  variant?: 'default' | 'centered' | 'side';
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ 
  id,
  isOpen,
  onClose,
  title,
  children,
  variant = 'default',
  className,
  ...rest 
}) => {
  if (!isOpen) return null;

  const modalClasses = [
    'feld-modal',
    `feld-modal--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="feld-modal-overlay" onClick={onClose}>
      <div 
        className={modalClasses}
        id={id}
        onClick={(e) => e.stopPropagation()}
        {...rest}
      >
        {title && (
          <div className="feld-modal-header">
            <h3 className="feld-modal-title">{title}</h3>
            <button className="feld-modal-close" onClick={onClose}>
              ×
            </button>
          </div>
        )}
        <div className="feld-modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 