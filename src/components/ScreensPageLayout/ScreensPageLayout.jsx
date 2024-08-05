import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import css from "./styles.module.css";
import { selectAllBoards } from "../../redux/boards/selectors";
import { Outlet } from "react-router";
import ColumnListVoid from "../ColumnListVoid/ColumnListVoid";

const ScreensPageLayout = ({ windowSize, burgerClick }) => {
  const isBoards = useSelector(selectAllBoards);
  const activeBoard = useSelector((state) => state.auth.user.activeBoard);
  const navigate = useNavigate();
  useEffect(() => {
    if (activeBoard) {
      navigate(activeBoard);
    }
  }, []);

  return (
    <div className={css.screens_page_layout}>
      <Header size={windowSize} showSidebar={burgerClick} />
      {isBoards.length === 0 ? <ColumnListVoid /> : <Outlet />}
    </div>
  );
};

export default ScreensPageLayout;
