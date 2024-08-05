import React, { useState } from 'react';
import {
  ContainerBoards,
  TitleBoard,
  ButtonBoardContainer,
  CreateBoard,
  ButtonBoard,
  ButtonIcon,
} from "./CreateBoardButton.styled";
import iconsSprite from "../../../assets/svgSprite/iconsSprite.svg";
import Modal from '../../Modal/Modal';
const CreateBoardButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalBoard = () => {
    setIsModalOpen(true);
  };

  const closeModalBoard = () => {
    setIsModalOpen(false);
  };
  return (
    <ContainerBoards>
      <TitleBoard>My boards</TitleBoard>
      <ButtonBoardContainer>
        <CreateBoard>Create a new board</CreateBoard>
        <ButtonBoard type="submit" aria-label="CreateBoard">
          <ButtonIcon>
            <use xlinkHref={`${iconsSprite}#plus`} />
          </ButtonIcon>
        </ButtonBoard>
      </ButtonBoardContainer>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModalBoard}>
          <CreateNewBoard onClose={closeModalBoard} />
        </Modal>
      )}
    </ContainerBoards>
  );
};

export default CreateBoardButton;
