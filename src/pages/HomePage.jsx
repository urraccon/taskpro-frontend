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

  return (
    <HomePageWrapper>
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
