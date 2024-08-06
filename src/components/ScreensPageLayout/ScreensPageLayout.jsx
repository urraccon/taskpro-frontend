import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import css from "./styles.module.css";
import { Outlet } from "react-router";
import ColumnListVoid from "../ColumnListVoid/ColumnListVoid";
import {
  selectBoardList,
  selectCurrentBoard,
} from "../../redux/board/selectors";

const ScreensPageLayout = ({ windowSize, burgerClick }) => {
  const boardList = useSelector(selectBoardList);
  const currentBoard = useSelector(selectCurrentBoard);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(
      currentBoard._id
        ? currentBoard._id
        : boardList.length !== 0 && boardList[0]._id
    );
  }, [currentBoard, boardList]);

  return (
    <div className={css.screens_page_layout}>
      <Header size={windowSize} showSidebar={burgerClick} />
      {boardList.length === 0 ? <ColumnListVoid /> : <Outlet />}
    </div>
  );
};

export default ScreensPageLayout;
