import React, { useEffect } from 'react';
import './Modal.css';

export interface ModalProps {
  id?: string;
  isOpen: boolean;
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  size?: 'small' | 'medium' | 'large' | 'full';
  variant?: 'default' | 'centered' | 'side';
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ 
  id,
  isOpen,
  title,
  children,
  onClose,
  size = 'medium',
  variant = 'default',
  className,
  ...rest 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget && onClose) {
      onClose();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && onClose) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalClasses = [
    'feld-modal',
    `feld-modal--${variant}`,
    `feld-modal--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className="feld-modal-backdrop"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div 
        className={modalClasses}
        data-testid={id}
        data-feld-id={id}
        data-feld-type="modal"
        {...rest}
      >
        {title && (
          <header className="feld-modal-header">
            <h2 className="feld-modal-title">{title}</h2>
            {onClose && (
              <button 
                className="feld-modal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                ×
              </button>
            )}
          </header>
        )}
        
        <div className="feld-modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 