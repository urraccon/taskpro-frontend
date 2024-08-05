import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import sprite from '../../assets/svgSprite/iconsSprite.svg';
import data from '../../assets/backgroundIcons/data';
import {
  createBoard,
  fetchAllBoard,
} from '../../redux/boards/operationsBoards';

import {
  Modal,
  ModalContent,
  NewBoardTitle,
  Input,
  ErrorMessage,
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
} from './CreateNewBoard.styled';

const TitleSchema = Yup.object({
  title: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Title is required'),
}).required();

const CreateNewBoard = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(TitleSchema),
    mode: 'onChange',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedIcon, setSelectedIcon] = useState('icon-project');
  const [selectedBackgroundId, setSelectedBackgroundId] = useState('0');

  const existingBoardTitles = useSelector(state => state.boards.boards);

  useEffect(() => {
    dispatch(fetchAllBoard());
  }, [dispatch]);

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

  const handleCreateBoard = data => {
    const { title } = data;

    const isExist = existingBoardTitles.some(
      item => item.title.trim() === title.trim()
    );

    if (isExist) {
      toast.error(`${data.title} already exists!`, {
        theme: 'colored',
        autoClose: 2500,
      });
      return;
    }

    dispatch(createBoard(data)).then(d => {
      navigate(d.payload._id);
      setValue('title', '');
      setValue('icon', '');
      setValue('background', '');
      onClose();
    });

    toast.success(`${data.title} has been successfully added to your boards!`, {
      theme: 'colored',
      autoClose: 2500,
    });
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
        <NewBoardTitle>New Board</NewBoardTitle>
        <form onSubmit={handleSubmit(handleCreateBoard)}>
          <Input
            id="newBoardInput"
            type="text"
            placeholder="Title"
            {...register('title')}
            onChange={handleTitleChange}
          />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>

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
            Create
          </Button>
        </form>

        <CloseButton onClick={handleClose}>
          <use href={`${sprite}#close`} />
        </CloseButton>
      </ModalContent>
    </Modal>
  );
};

export default CreateNewBoard;
