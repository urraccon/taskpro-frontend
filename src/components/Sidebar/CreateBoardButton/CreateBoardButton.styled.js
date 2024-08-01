import styled from 'styled-components';

const ContainerBoards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

const TitleBoard = styled.p`
  font-size: 12px;
  letter-spacing: -0.02em;
  color: var(--title_board);
  margin-bottom: 8px;
`;

const ButtonBoardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;
  padding-top: 14px;
  border-bottom: 1px solid var(--button_border_container);
  border-top: 1px solid var(--button_border_container);
`;

const CreateBoard = styled.span`
  width: 76px;
  font-size: 14px;
  flex-shrink: 0;
  letter-spacing: -0.02em;
  color: var(--sidebar_text_color);
`;

const ButtonBoard = styled.button`
  width: 40px;
  height: 36px;
  background-color: var(--accent_button_board);
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--hover_logo);
  }
`;

const ButtonIcon = styled.svg`
  stroke: var(--plus_button_sidebar);
  width: 20px;
  height: 20px;
`;

export {
  ContainerBoards,
  TitleBoard,
  ButtonBoardContainer,
  CreateBoard,
  ButtonBoard,
  ButtonIcon,
};
