import styled from 'styled-components';

const LogOutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
`;

const LogoutButton = styled.button`
  display: flex;
  background: transparent;
  border: none;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  padding: 0;

  &:hover {
    transform: scale(1.05);
  }
`;

const IconLogOut = styled.svg`
  width: 32px;
  height: 32px;
  stroke: #bedbb0;
  background: transparent;
  transition: stroke 0.3s;
  ${LogoutButton}:hover & {
    stroke: #9dc888;
  }
`;

const LogOutText = styled.span`
  font-size: 14px;
  color: var(--sidebar_text_color);
`;

export { LogOutContainer, LogoutButton, IconLogOut, LogOutText };
