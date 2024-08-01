// import React from 'react';
import WelcomeInner from "../components/Welcome/Welcome";
import { Welcome } from "../components/Welcome/Welcome.styled";

const WelcomePage = () => {
  return (
    <Welcome>
      <div className="container">
        <WelcomeInner />
      </div>
    </Welcome>
  );
};

export default WelcomePage;
