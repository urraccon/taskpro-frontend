import React from 'react';
import { Welcome } from '../components/Welcome/Welcome.styled';
import WelcomeInner from '../components/Welcome/Welcome';

const WelcomePage = () => {
  return (
    <Welcome>
      <div className='container'>
        <WelcomeInner />
      </div>
    </Welcome>
  );
};

export default WelcomePage;
