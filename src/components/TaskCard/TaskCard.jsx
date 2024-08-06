import React, { useState } from "react";
import { useDispatch } from "react-redux";
import sprite from "../../assets/svgSprite/iconsSprite.svg";
import TooltipComp from "./Tooltip/TooltipComp";
import {
  CardBottom,
  CardContentWrapper,
  CardControlsButton,
  CardControlsIcon,
  CardControlsList,
  CardDescription,
  CardHR,
  CardInfoHeader,
  CardInfoItem,
  CardInfoList,
  CardInfoValue,
  CardNotificationIcon,
  CardTitle,
  ColorTag,
  FullCardWrapper,
} from "./TaskCard.styled";
import { getCurrentDate } from "./services/getCurrentDate";
import CardModal from "../modals/card-modal/CardModal";
import { removeCard } from "../../redux/board/operations/cardOperations";
import dayjs from "dayjs";

const TaskCard = ({ cardData }) => {
  const { title, description, priority, deadline, _id } = cardData;

  const [showEditModal, setShowEditModal] = useState(false);

  const dispatch = useDispatch();

  /* -------------------- FORMATTING DEADLINE --------------------*/

  const formattedDeadline = dayjs(deadline).format("DD/MM/YYYY");

  /* -------------------- PICK A PRIORITY COLOR + RADIO NUMBER --------------------*/

  let cardColor = "";

  switch (priority) {
    case "low":
      cardColor = "#8fa1d0";
      break;
    case "medium":
      cardColor = "#e09cb5";
      break;
    case "high":
      cardColor = "#bedbb0";
      break;

    default:
      cardColor = "gray";
      break;
  }

  /* -------------------- CARD CONTROLS FUNCTIONS --------------------*/

  const toggleEditCardModal = () => {
    return setShowEditModal(!showEditModal);
  };

  const deleteCard = () => dispatch(removeCard(_id));

  /* -------------------- IS SHOW NOTIFICATION ICON --------------------*/

  const isDeadlineToday = formattedDeadline === getCurrentDate();

  /* -------------------- CREATE INITIAL VALUES OBJ --------------------*/
  const initValues = {
    title,
    description,
    priority,
    deadline,
    _id,
  };

  return (
    <FullCardWrapper>
      <ColorTag style={{ background: `${cardColor}` }} />
      <CardContentWrapper>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <CardHR />
        <CardBottom>
          <CardInfoList>
            <CardInfoItem>
              <CardInfoHeader>Priority</CardInfoHeader>
              <CardInfoValue>{priority}</CardInfoValue>
            </CardInfoItem>
            <CardInfoItem>
              <CardInfoHeader>Deadline</CardInfoHeader>
              <CardInfoValue>{formattedDeadline}</CardInfoValue>
            </CardInfoItem>
          </CardInfoList>
          <CardControlsList>
            {isDeadlineToday && (
              <li>
                <CardControlsButton>
                  <CardNotificationIcon width={16} height={16}>
                    <use xlinkHref={`${sprite}#icon-bell`} />
                  </CardNotificationIcon>
                </CardControlsButton>
              </li>
            )}
            <li>
              <CardControlsButton name={_id} className={_id}>
                <CardControlsIcon width={16} height={16}>
                  <use xlinkHref={`${sprite}#icon-arrov_circle`} />
                </CardControlsIcon>
              </CardControlsButton>
              {/* Tooltip */}
              <TooltipComp cardId={_id} />
              {/* Tooltip */}
            </li>
            <li>
              <CardControlsButton onClick={toggleEditCardModal}>
                <CardControlsIcon width={16} height={16}>
                  <use xlinkHref={`${sprite}#icon-pencil`} />
                </CardControlsIcon>
              </CardControlsButton>
            </li>
            <li>
              <CardControlsButton onClick={deleteCard}>
                <CardControlsIcon width={16} height={16}>
                  <use xlinkHref={`${sprite}#icon-trash`} />
                </CardControlsIcon>
              </CardControlsButton>
            </li>
          </CardControlsList>
        </CardBottom>
      </CardContentWrapper>
      {showEditModal && <CardModal id={_id} close={toggleEditCardModal} />}
    </FullCardWrapper>
  );
};

export default TaskCard;
