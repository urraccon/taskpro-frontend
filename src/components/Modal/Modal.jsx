import React, { useEffect } from 'react';
import { ModalOverlay } from './Modal.styled';
import ModalPortal from '../ModalPortal/ModalPortal';

const Modal = ({ onClose, children }) => {
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeydown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  return (
    <ModalPortal>
      <ModalOverlay onClick={handleBackdropClick}>{children}</ModalOverlay>
    </ModalPortal>
  );
};

export default Modal;
