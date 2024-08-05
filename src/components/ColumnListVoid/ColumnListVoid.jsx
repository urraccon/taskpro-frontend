import React, { useState } from 'react';
import css from './styles.module.css';
import Modal from '../Modal/Modal';
// import CreateNewBoard from 'components/CreateNewBoard/CreateNewBoard';
import OpenFiltersButton from '../OpenFiltersBtn/OpenFiltersBtn';
const ColumnListVoid = () => {
  const [isAddBoardOpen, setIsAddBoardOpen] = useState(false)
  const toggle = () => {
    setIsAddBoardOpen(!isAddBoardOpen)
  }
  return (
    <div className={css.void}>
       <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}><OpenFiltersButton /></div>
      <p className={css.void_text}>
        Before starting your project, it is essential{' '}
        <button onClick={toggle} className={css.add_board_btn}>to create a board</button> to visualize and track all the
        necessary tasks and milestones. This board serves as a powerful tool to
        organize the workflow and ensure effective collaboration among team
        members.
      </p>
      {isAddBoardOpen&&<Modal onClose={toggle}><CreateNewBoard onClose={toggle}/></Modal>}
    </div>
  );
};

export default ColumnListVoid;
