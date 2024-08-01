import React from 'react';
import iconsSprite from '../../../assets/svgSprite/iconsSprite.svg';

import {
  LogoContainer,
  LogoIcon,
  LogoTitle,
  LogoIconContainer,
} from './LogoComponent.styled';

const LogoComponent = () => {
  return (
    <LogoContainer>
      <LogoIconContainer>
        <LogoIcon>
          <use xlinkHref={`${iconsSprite}#icon-vector-logo`} />
        </LogoIcon>
      </LogoIconContainer>
      <LogoTitle>Task Pro</LogoTitle>
    </LogoContainer>
  );
};

export default LogoComponent;
