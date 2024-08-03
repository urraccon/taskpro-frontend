import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 350px;
  background-color: #151515;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  padding: 23px;
  outline: none;

  @media screen and (max-width: 375px) {
    margin: 0 20px;
  }
`;
