import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import css from "./styles.module.css";

// Adauga redux pt selectarea tuturor board urilor
// Adauga ColumnListAvoid pt. Ioana

const ScreensPageLayout = ({ windowSize, burgerClick }) => {
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

      {/** de adaugat linie cod Ioana pt column */}
    </div>
  );
};

export default ScreensPageLayout;
