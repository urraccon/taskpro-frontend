import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const EditProfileContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;

  border-radius: 8px;
  background-color: var(--add_column_modal_bg);

  @media screen and (min-width: 375px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    max-width: 400px;
  }

  & h2 {
    margin: 0 0 24px 0;

    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.02em;
    line-height: 1.5;
    color: var(--main_text_color);
  }
`;

export const EditProfileForm = styled(Form)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const AvatarContainer = styled.div`
  position: relative;
  align-self: center;
`;

export const AvatarImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 68px;
  height: 68px;
  border-radius: 8px;
  overflow: hidden;

  ${props => !!props.$bg && 'background-color: var(--avatar-bg);'}

  & img {
    max-width: 100%;
    max-height: 100%;
  }

  & svg {
    display: block;
    align-self: flex-end;
    max-width: 56px;
    max-height: 50px;

    fill: var(--avatar-icon);

    & use {
      margin: auto;
    }
  }
`;

export const UploadAvatarButton = styled.div`
  position: absolute;
  top: 55px;
  left: 22px;
  max-width: 24px;
  max-height: 24px;
  padding: 7px;

  border: 0;
  border-radius: 6px;
  background-color: var(--modal_upload_avatar);

  cursor: pointer;

  &:hover {
    background-color: var(--accent_hover);
  }

  & svg {
    display: block;
    max-width: 10px;
    max-height: 10px;
    margin: auto;

    stroke: #161616;

    & use {
      margin: auto;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 14px 0;

  &[data-last-child] {
    margin: 0 0 24px 0;
  }

  &[data-avatar] {
    margin: 0 0 25px 0;
  }
`;

export const EditProfileInput = styled(Field)`
  width: 100%;
  height: 100%;
  max-height: 49px;
  padding: 14px 18px;

  border: solid 1px var(--accent);
  border-radius: 8px;
  background-color: transparent;
  opacity: 0.4;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.5;
  color: var(--main_text_color);

  &:focus-visible {
    outline: 0;
    opacity: 1;
  }

  &::placeholder {
    color: var(--light_text);
  }

  &[data-type='password'] {
    padding-right: 54px;
  }
`;

export const PasswordInputContainer = styled.div`
  position: relative;
`;

export const ShowHideButton = styled.button`
  position: absolute;
  top: calc(50% - 9px);
  right: 19px;
  max-width: 18px;
  max-height: 18px;
  padding: 0;

  border: 0;
  background-color: transparent;

  & svg {
    opacity: 0.4;

    stroke: var(--main_text_color);
  }
`;

export const SubmitButton = styled.button`
  max-height: 49px;
  padding: 14px 0;

  border: 0;
  border-radius: 8px;
  background-color: var(--accent);

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.5;
  color: var(--modal_button_text);

  &:hover {
    background-color: var(--accent_hover);
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.5;
`;

export const StyledAvatarErrorMessage = styled(StyledErrorMessage)`
  margin: 14px 0 0 0;

  text-align: center;
`;

export const CloseButton = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  stroke: var(--main_text_color);
  cursor: pointer;
`;
