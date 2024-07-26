import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 335px;
  padding: 24px;
  background-color: #151515;
  border-radius: 8px;
  padding: 24px;

  @media screen and (min-width: 768px) {
    max-width: 424px;
    padding: 40px;
  }
`;

export const NavContainer = styled.div`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.3);
  display: flex;
  gap: 14px;
  margin-bottom: 40px;

  .link {
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .link:hover,
  .link:focus {
    color: #ffffff;
  }
  .activeLink {
    color: #ffffff;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 14px;
`;

export const StyledInput = styled(Field)`
  border: 1px solid #bedbb0;
  border-radius: 8px;
  width: 100%;
  max-width: 287px;
  height: 49px;
  padding: 14px 18px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  background: #1f1f1f;
  color: #ffffff;
  opacity: 0.4;
  outline: transparent;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:placeholder {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: rgba(255, 255, 255, 0.3);
  }

  &:hover,
  &:focus {
    opacity: 1;
  }
  @media screen and (min-width: 768px) {
    max-width: 344px;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
`;

export const PassInputContainer = styled.div`
  position: relative;
`;

export const StyledInputPass = styled(StyledInput)`
  display: flex;
  margin-bottom: 0;
`;

export const ShowHideButton = styled.span`
  position: absolute;
  z-index: 2;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  .icon {
    stroke: rgba(255, 255, 255, 0.3);
  }

  .icon:hover,
  .icon:focus {
    stroke: #bedbb0;
  }
`;

export const SubButton = styled.button`
  border-radius: 8px;
  border: none;
  width: 100%;
  max-width: 287px;
  height: 49px;
  padding: 0;
  margin-top: 24px;
  background: #bedbb0;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #161616;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #9dc888;
  }

  @media screen and (min-width: 768px) {
    max-width: 344px;
  }
`;
