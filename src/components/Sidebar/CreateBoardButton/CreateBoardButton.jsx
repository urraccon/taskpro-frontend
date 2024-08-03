import {
  ContainerBoards,
  TitleBoard,
  ButtonBoardContainer,
  CreateBoard,
  ButtonBoard,
  ButtonIcon,
} from "./CreateBoardButton.styled";
import iconsSprite from "../../../assets/svgSprite/iconsSprite.svg";

const CreateBoardButton = () => {
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
    </ContainerBoards>
  );
};

export default CreateBoardButton;
