import styled, { keyframes } from 'styled-components';

const ring = keyframes`
0% {
    transform: rotate(0);
  }
  1% {
    transform: rotate(30deg);
  }
  3% {
    transform: rotate(-28deg);
  }
  5% {
    transform: rotate(34deg);
  }
  7% {
    transform: rotate(-32deg);
  }
  9% {
    transform: rotate(30deg);
  }
  11% {
    transform: rotate(-28deg);
  }
  13% {
    transform: rotate(26deg);
  }
  15% {
    transform: rotate(-24deg);
  }
  17% {
    transform: rotate(22deg);
  }
  19% {
    transform: rotate(-20deg);
  }
  21% {
    transform: rotate(18deg);
  }
  23% {
    transform: rotate(-16deg);
  }
  25% {
    transform: rotate(14deg);
  }
  27% {
    transform: rotate(-12deg);
  }
  29% {
    transform: rotate(10deg);
  }
  31% {
    transform: rotate(-8deg);
  }
  33% {
    transform: rotate(6deg);
  }
  35% {
    transform: rotate(-4deg);
  }
  37% {
    transform: rotate(2deg);
  }
  39% {
    transform: rotate(-1deg);
  }
  41% {
    transform: rotate(1deg);
  }

  43% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
`;

export const FullCardWrapper = styled.div`
  display: flex;
  border-radius: 8px;
  max-width: 334px;
  background: var(--background_task_item);
  overflow: hidden;
`;

export const ColorTag = styled.div`
  width: 4px;
`;

export const CardContentWrapper = styled.div`
  width: 100%;
  padding: 14px 20px;
  box-sizing: border-box;
  height: 154px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  letter-spacing: -0.02em;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: var(--main_text_color);
  margin-bottom: 8px;
`;

export const CardDescription = styled.p`
  line-height: 133%;
  letter-spacing: -0.02em;
  color: var(--light_text);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardHR = styled.hr`
  border: none;
  margin: 14px 0;
  width: 100%;
  height: 1px;
  background-color: var(--calendar_help);
  opacity: 0.5;
  border-radius: 10px;
`;

export const CardBottom = styled.div`
  display: flex;
`;

export const CardInfoList = styled.ul`
  align-self: start;
  display: flex;
  gap: 14px;
`;

export const CardInfoItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CardInfoHeader = styled.h5`
  font-weight: 400;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: var(--light_text);
`;

export const CardInfoValue = styled.p`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: var(--main_text_color);

  /* Змінюємо першу букву на велику */
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const CardControlsList = styled.ul`
  display: flex;
  gap: 8px;
  margin-left: auto;
  justify-content: center;
  align-items: flex-end;
`;

export const CardControlsButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const CardControlsIcon = styled.svg`
  stroke: var(--light_text);
  fill: transparent;
  transition: 200ms ease-in-out;

  &:hover,
  &:focus {
    stroke: var(--accent);
  }
`;

export const CardNotificationIcon = styled.svg`
  fill: transparent;
  stroke: var(--accent);
  filter: drop-shadow(0 0 4px var(--accent));
  animation: ${ring} 4s 0.7s ease-in-out infinite;
  transform-origin: 50% 4px;
`;
