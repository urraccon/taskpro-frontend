import React from 'react';

const BackDropToSidebar = ({ close, children }) => {
  const handleBackdropClick = e => {

    if (e.target === e.currentTarget) {
      close(); 
    }
  };
  return (
    <div
      onClick={handleBackdropClick}
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        zIndex: 888,
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}
    >
      {children}
    </div>
  );
};

export default BackDropToSidebar;
