import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  z-index:200;
  position: relative;
  padding: 14px 20px;
  /* align-items: center; */
  text-decoration: none;
  list-style: none;
  width:100%;
  height: 60px;
  background-color: var(--background_header);
  transition: background-color 200ms linear;

  @media screen and (min-width: 768px) {
    height: 68px;
    padding: 18px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 18px 24px;

  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  width: 100%;
  height: 100%;
  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
  }
`;


export const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 21px;
  gap: 8px;
  color: var(--text-color);
  transition: color 500ms linear;
`;

export const ListItem = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  text-decoration: none;
  list-style: none;
  gap: 14px;
`;

export const NameUser = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--main_text_color);
  transition: color 500ms linear;
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: var(--background_userdefault);
  border: none;
  padding: 0;
  overflow: hidden;

  &:hover,
  &focus {
    scale: 1.1;
  }
`;

export const BtnBurger = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  background-color: transparent;

  &:hover,
  &focus {
    scale: 1.1;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 24px;

  }
`;

export const Svg = styled.svg`
  fill: var(--background_header);
  padding-top: 10px;
`;

export const Burger = styled.svg`
  padding: 0;
  stroke: var(--main_text_color);
`;
