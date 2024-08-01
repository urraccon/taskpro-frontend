import styled from 'styled-components';

const StyledSidebar = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  max-width: 197px;
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: var(--background_sidebar);
  overflow: auto;
  transition: background-color 200ms linear;
  
  @media screen and (min-width: 768px) {
    max-width: 212px;
    padding-top: 14px;
    padding-bottom: 14px;
  }

  @media screen and (min-width: 1440px) {
    overflow: hidden;
  }
`;

const SidebarContainer = styled.div`
  padding-left: 14px;
  padding-right: 14px;

  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const SidebarMargin = styled.div`
  margin-top: 70px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

export { StyledSidebar, SidebarContainer, SidebarMargin };
