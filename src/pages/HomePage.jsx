
import React, { useEffect, useState } from "react";
import { fetchAllBoard } from "../redux/boards/operationsBoards";
import { useDispatch } from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar";
import HomePageWrapper from "../components/HomePageWrapper/HomePageWrapper";
import ScreensPageLayout from "../components/ScreensPageLayout/ScreensPageLayout";
import BackDropToSidebar from "../components/BackDropToSidebar/BackDropToSidebar";

const HomePage = () => {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  const sidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    dispatch(fetchAllBoard());
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
