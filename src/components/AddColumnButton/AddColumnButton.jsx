import React from 'react';
import css from './styles.module.css';
import svg from '../../assets/svgSprite/iconsSprite.svg';
const AddColumnButton = ({ click }) => {
  return (
    <button onClick={click} className={css.add_card_btn}>
      <span className={css.svg_wrapper}>
        <svg className={css.btn_plus_icon} width={14} height={14}>
          <use xlinkHref={`${svg}#icon-plus`}></use>
        </svg>
      </span>
      Add another column
    </button>
  );
};

export default AddColumnButton;
