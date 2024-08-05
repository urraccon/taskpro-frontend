import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const BoardLoader = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 50,
        right: 50,
        zIndex: 999,
      }}
    >
      <ThreeCircles
        visible={true}
        height="40"
        width="40"
        color="var(--accent)"
        ariaLabel="three-circles-loading"
        wrapperClass=""
      />
    </div>
  );
};

export default BoardLoader;
