import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const LogoIcon = styled.svg`
  fill: var(--logo_vector);
  width: 12px;
  height: 16px;
`;

const LogoIconContainer = styled.div`
  background-color: var(--logo_background);
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoTitle = styled.h1`
  font-size: 16px;
  letter-spacing: -0.04em;
  color: var(--sidebar_text_color);
`;

export { LogoContainer, LogoIcon, LogoTitle, LogoIconContainer };
