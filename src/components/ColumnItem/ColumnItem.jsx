import React, { useState } from 'react';
// import TaskCard from './components/TaskCard/TaskCard';
import css from './styles.module.css';
import iconSprite from '../../assets/svgSprite/iconsSprite.svg';
import AddCardBtn from '../AddCardBtn/AddCardBtn';
import Modal from '../Modal/Modal';
import EditColumModal from '../EditColumnModal/EditColumnModal';
// import { CardModal } from 'components/CardModal/CardModal';
import { useDispatch } from 'react-redux';
import { deleteColumn } from '../../redux/boards/operationsColumns';

const ColumnItem = ({ column }) => {

  const dispatch = useDispatch();
  const { title, cards, _id } = column;
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
                dispatch(deleteColumn(_id));
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
          {cards &&
            cards.map(el => {
              return (
                <li key={el._id}>
                  <TaskCard cardOwner={column._id} cardData={el} />
                </li>
              );
            })}
        </ul>
        <AddCardBtn click={toggleAddCard} />
        {isRenameColumnOpen && (
          <Modal onClose={toggleEdit}>
            <EditColumModal columnId={_id} title={title} onClose={toggleEdit} />
          </Modal>
        )}
        {isAddCardOpen && (
          <Modal onClose={toggleAddCard}>
            <CardModal
              initialValues={{ ...column, title: '', label: "without" }}
              newCard
              onClose={toggleAddCard}
            />
          </Modal>
        )}
      </li>
    </>
  );
};

export default ColumnItem;
