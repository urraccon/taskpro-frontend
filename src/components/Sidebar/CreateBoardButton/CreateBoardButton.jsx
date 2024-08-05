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

import { useState } from "react";
import BoardModal from "../../modals/board-modal/BoardModal";

const CreateBoardButton = () => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }


  return (
    <ContainerBoards>
      <TitleBoard>My boards</TitleBoard>
      <ButtonBoardContainer>
        <CreateBoard>Create a new board</CreateBoard>
        <ButtonBoard
          type="submit"
          aria-label="CreateBoard"
          onClick={handleClick}
        >
          <ButtonIcon>
            <use xlinkHref={`${iconsSprite}#plus`} />
          </ButtonIcon>
        </ButtonBoard>
      </ButtonBoardContainer>

      {open && <BoardModal close={handleClose} />}

    </ContainerBoards>
  );
};

export default CreateBoardButton;
