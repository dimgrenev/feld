import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalSpec } from './spec';
import './Modal.css';
import { React.Fragment } from '../types';
import { UserComponent } from '../types';

const Modal: React.FC<ModalSpec> = ({ id, isOpen, title, children, onClose, ...rest }) => {

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  const titleId = `modal-title-${id}`;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose} {...rest}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="modal-header">
          <h2 id={titleId} className="modal-title">{title}</h2>
          <button className="modal-close-button" onClick={onClose} aria-label="Close">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <UserComponent face={children}>
            <React.Fragment />
          </UserComponent>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
