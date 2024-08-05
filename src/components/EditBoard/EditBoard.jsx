import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';

import sprite from '../../assets/svgSprite/iconsSprite.svg';
import data from '../../assets/backgroundIcons/data';
import { updateBoard } from '../../redux/boards/operationsBoards';
import { selectedBoard } from '../../redux/boards/selectors';

import {
  Modal,
  ModalContent,
  NewBoardTitle,
  Input,
  IconTitle,
  IconWrap,
  Icon,
  BackgroundTitle,
  BgIcon,
  BackgroundItem,
  BackgroundImage,
  Button,
  ContainerSvg,
  Svg,
  CloseButton,
} from '../CreateNewBoard/CreateNewBoard.styled';

const EditBoard = ({ onClose }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [selectedIcon, setSelectedIcon] = useState('');
  const [selectedBackgroundId, setSelectedBackgroundId] = useState('');

  const dispatch = useDispatch();
  const board = useSelector(selectedBoard);

  useEffect(() => {
    setValue('title', board.title);
    setValue('icon', board.icon);
    setValue('background', board.background);
    setSelectedIcon(board.icon);
    setSelectedBackgroundId(board.background);
  }, [board.background, board.icon, board.title, setValue]);

  const handleTitleChange = event => {
    setValue('title', event.target.value.toString());
  };

  const handleIconSelect = icon => {
    setSelectedIcon(icon);
    setValue('icon', icon);
  };

  const handleBackgroundSelect = backgroundId => {
    setSelectedBackgroundId(backgroundId);
    setValue('background', backgroundId);
  };

  const handleEditBoard = data => {
    const { title, icon, background } = data;
    let newBoard = {};
    if (title === board.title) {
      newBoard = {
        icon: data.icon,
        background: data.background,
      };
    } else {
      newBoard = { title, icon, background };
    }

    dispatch(updateBoard([board._id, newBoard]));
    onClose();
  };

  const renderIcons = () => {
    const icons = [
      'icon-project',
      'icon-star',
      'icon-loading',
      'icon-puzzle',
      'icon-container',
      'icon-lightning',
      'icon-colors',
      'icon-hexagon',
    ];

    return icons.map(icon => (
      <Icon
        key={icon}
        selected={selectedIcon === icon}
        onClick={() => handleIconSelect(icon)}
      >
        <use href={`${sprite}#${icon}`} />
      </Icon>
    ));
  };

  const renderBackgrounds = () => {
    return data.map(item => (
      <BackgroundItem
        key={item.id}
        selected={selectedBackgroundId === item.id}
        onClick={() => handleBackgroundSelect(item.id)}
      >
        <BackgroundImage src={item.image} alt="Background" />
      </BackgroundItem>
    ));
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal>
      <ModalContent>
        <NewBoardTitle>Edit Board</NewBoardTitle>
        <form onSubmit={handleSubmit(handleEditBoard)}>
          <Input
            id="newBoardInput"
            type="text"
            placeholder="Title"
            {...register('title')}
            onChange={handleTitleChange}
          />

          <IconTitle>Icons</IconTitle>
          <IconWrap>{renderIcons()}</IconWrap>

          <BackgroundTitle>Background</BackgroundTitle>
          <BgIcon>{renderBackgrounds()}</BgIcon>

          <Button type="submit">
            <ContainerSvg>
              <Svg width="14px" height="14px">
                <use href={`${sprite}#plus`} />
              </Svg>
            </ContainerSvg>
            Edit
          </Button>
        </form>

        <CloseButton onClick={handleClose}>
          <use href={`${sprite}#close`} />
        </CloseButton>
      </ModalContent>
    </Modal>
  );
};

export default EditBoard;
