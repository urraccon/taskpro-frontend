import React from 'react';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '50px',
      }}
    >
      <h1 style={{ color: '#f00' }}>404</h1>

      <span style={{ fontWeight: 700 }}>Not found.</span>

      <p>Please go back!</p>

      <a
        href='/'
        style={{
          fontSize: '30px',
          fontWeight: 700,
        }}
      >
        Home ➡️
      </a>
    </div>
  );
};

export default NotFound;
