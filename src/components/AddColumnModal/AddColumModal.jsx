import React, { useState } from 'react';
import svg from '../../assets/svgSprite/iconsSprite.svg';
import css from './styles.module.css';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/boards/operationsColumns';
import { useParams } from 'react-router';
const AddColumnModal = ({ onClose }) => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const [valueInput, setValueInput] = useState('');
  const handleChange = ev => {
    setValueInput(ev.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!valueInput.length) {
      return;
    }
    dispatch(addColumn([boardId, { title: valueInput }]));
    setValueInput('');
    e.target.reset();
    onClose();
  };
  return (
    <div className={css.modal}>
      <button className={css.close_btn} onClick={onClose}>
        <svg className={css.close_svg} width={18} height={18}>
          <use xlinkHref={`${svg}#close`} />
        </svg>
      </button>
      <p className={css.title}>Add column</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="title"
          className={css.input}
          type="text"
          placeholder="Title"
        />
        <button type="submit" className={css.submBtn}>
          <span className={css.svg_wrapper}>
            <svg className={css.btn_plus_icon} width={14} height={14}>
              <use xlinkHref={`${svg}#icon-plus`}></use>
            </svg>
          </span>
          Add
        </button>
      </form>
    </div>
  );
};
export default AddColumnModal;
