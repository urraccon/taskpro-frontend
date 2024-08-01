import styled from 'styled-components';
import { SidebarContainer } from '../Sidebar.styled';

export const ListBoardStyle = styled.div`
  margin-top: 40px;
  /* overflow-y: hidden; */
  margin-bottom: 10px;
  max-height: calc(100vh - 625px);
  overflow-y: auto;
  min-height: 80px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--scroll_bar_bg_color);
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scroll_bar_color);
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    /* max-height: 100vh; */
  }
  /* тут зафіксував висоту так щоби все було статичним а 
  контейнер з списком дошок вираховувався залежно від висоти екрану */
  @media screen and (min-width: 1440px) {
    max-height: calc(100vh - 625px);
  }
`;

export const BoardWrapper = styled(SidebarContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: ${p =>
    p.$isActive ? `var(--background_need_help)` : `transparent`};
  padding-top: 20px;
  padding-bottom: 20px;
  overflow: hidden;

  &::after {
    display: ${p => !p.$isActive && 'none'};
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 100%;
    border-radius: 4px;
    background-color: var(--accent);
    transform: translateX(50%);
  }
`;
export const TitleWrapper = styled.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  column-gap: 4px;
  color: ${p =>
    p.$isActive ? `var(--sidebar_text_color)` : `var(--title_board)`};
  @media screen and (min-width: 768px) {
    column-gap: 8px;
  }
`;

export const ToolBar = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
export const BoardIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: ${p =>
    p.$isActive ? `var(--sidebar_text_color)` : `var(--title_board)`};
`;
export const ToolBarIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: currentColor;
`;
export const ToolBarButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--tool_bar_button);
  padding: 0;
  margin: 0;
`;
