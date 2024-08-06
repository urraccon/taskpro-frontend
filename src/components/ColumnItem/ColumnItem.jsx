import React, { useState } from "react";
import css from "./styles.module.css";
import iconSprite from "../../assets/svgSprite/iconsSprite.svg";
import AddCardBtn from "../AddCardBtn/AddCardBtn";
import { useDispatch } from "react-redux";
import ColumnModal from "../modals/column-modal/ColumnModal";
import CardModal from "../modals/card-modal/CardModal";
import { removeColumn } from "../../redux/board/operations/columnOperations";
import TaskCard from "../TaskCard/TaskCard";

const ColumnItem = ({ column }) => {
  const dispatch = useDispatch();
  const { title, cardList, _id } = column;
  const [isRenameColumnOpen, setIsRenameColumnOpen] = useState(false);
  const toggleEdit = () => {
    setIsRenameColumnOpen(!isRenameColumnOpen);
  };
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const toggleAddCard = () => {
    setIsAddCardOpen(!isAddCardOpen);
  };
  return (
    <>
      <li className={css.column_item}>
        <div className={css.column_header_wrapper}>
          <h3 className={css.column_title}>{title}</h3>
          <div className={css.title_icons_wrapper}>
            <button onClick={toggleEdit} className={css.culumn_title_btn}>
              <svg className={css.icon_el} width={16} height={16}>
                <use xlinkHref={`${iconSprite}#icon-pencil`} />
              </svg>
            </button>
            <button
              onClick={() => {
                dispatch(removeColumn(_id));
              }}
              className={css.culumn_title_btn}
            >
              <svg className={css.icon_el} width={16} height={16}>
                <use xlinkHref={`${iconSprite}#icon-trash`} />
              </svg>
            </button>
          </div>
        </div>
        <ul className={css.task_list}>
          {cardList &&
            cardList.map((el) => {
              return (
                <li key={el._id}>
                  <TaskCard cardOwner={column._id} cardData={el} />
                </li>
              );
            })}
        </ul>
        <AddCardBtn click={toggleAddCard} />
        {isRenameColumnOpen && <ColumnModal id={_id} close={toggleEdit} />}
        {isAddCardOpen && <CardModal columnId={_id} close={toggleAddCard} />}
      </li>
    </>
  );
};

export default ColumnItem;
