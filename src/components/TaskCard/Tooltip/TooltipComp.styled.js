import styled from 'styled-components';

export const TooltipText = styled.p`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--light_text);
  transition: 200ms ease-in-out;
`;

export const TooltipIcon = styled.svg`
  stroke: var(--light_text);
  fill: transparent;
  transition: 200ms ease-in-out;
`;

export const TooltipButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover ${TooltipText}, &:focus ${TooltipText} {
    color: var(--accent);
  }
  &:hover ${TooltipIcon}, &:focus ${TooltipIcon} {
    stroke: var(--accent);
  }
`;
