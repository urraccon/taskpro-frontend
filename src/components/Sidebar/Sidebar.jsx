import LogoComponent from "./LogoComponent/LogoComponent";
import CreateNewBoard from "./CreateBoardButton/CreateBoardButton";
import CreateHelpButton from "./HelpButton/HelpButton";
import LogOut from "./LogOut/LogOut";
import ListBoards from "./ListBoards/ListBoards";
import {
  StyledSidebar,
  SidebarContainer,
  SidebarMargin,
} from "./Sidebar.styled";
import { useSelector } from "react-redux";
import { selectBoardList } from "../../redux/board/selectors";

const Sidebar = () => {
  const boards = useSelector(selectBoardList);

  return (
    <StyledSidebar>
      <div>
        <SidebarContainer>
          <LogoComponent />
        </SidebarContainer>
        <SidebarMargin>
          <SidebarContainer>
            <CreateNewBoard />
          </SidebarContainer>
        </SidebarMargin>
        <ListBoards boards={boards} />
      </div>
      <div>
        <SidebarContainer>
          <CreateHelpButton />
        </SidebarContainer>
        <SidebarContainer>
          <LogOut />
        </SidebarContainer>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
