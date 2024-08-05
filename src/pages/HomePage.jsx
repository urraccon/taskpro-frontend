import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar";
import HomePageWrapper from "../components/HomePageWrapper/HomePageWrapper";
import ScreensPageLayout from "../components/ScreensPageLayout/ScreensPageLayout";
import BackDropToSidebar from "../components/BackDropToSidebar/BackDropToSidebar";
import {
  fetchBoard,
  fetchBoardList,
} from "../redux/board/operations/boardOperations";
import { selectActiveBoard } from "../redux/auth/selectors";
import CardModal from "../components/modals/card-modal/CardModal";

const HomePage = () => {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  const activeBoard = useSelector(selectActiveBoard);

  const sidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    dispatch(fetchBoardList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBoard(activeBoard));
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    if (size > 1440) {
      setIsSidebarOpen(false);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size]);

  const [open, setOpen] = useState(true);

  return (
    <HomePageWrapper>
      {open && (
        <CardModal
          columnId="66aeb9383bf854d6132cbf54"
          id="66af601664dfb1f44f4d98c0"
          close={() => {
            setOpen(false);
          }}
        />
      )}
      {isSidebarOpen && (
        <BackDropToSidebar close={sidebarToggle}>
          <Sidebar />
        </BackDropToSidebar>
      )}
      {size >= 1440 && <Sidebar />}
      <ScreensPageLayout windowSize={size} burgerClick={sidebarToggle}>
        {/** Add here ColumnList IOANA */}
      </ScreensPageLayout>
    </HomePageWrapper>
  );
};

export default HomePage;
