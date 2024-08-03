import styled from 'styled-components';

const NeedHelpInner = styled('div')`
  position: relative;
  max-width: 335px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--modal_content_bg);
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
  .NeedHelpInnerForm {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .NeedHelpInnerEmail {
    border: 1px solid var(--accent);
    border-radius: 8px;
    padding-left: 18px;
    width: 287px;
    height: 49px;
    background-color: var(--background_help);
    opacity: 0.4;
    color: var(--main_text_color);
  }
  .NeedHelpInner__email::placeholder {
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--main_text_color);
  }
  .NeedHelpInner__email:focus {
    padding-left: 18px;
  }
  .NeedHelpInner__email:focus::placeholder {
    color: transparent;
  }
  @media screen and (min-width: 768px) {
    .NeedHelpInner__email {
      width: 352px;
    }
  }
  .NeedHelpInnerComment {
    border: 1px solid var(--accent);
    border-radius: 8px;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 18px;
    width: 287px;
    height: 120px;
    background-color: var(--background_help);
    opacity: 0.4;
    resize: none;
    color: var(--main_text_color);
  }
  .NeedHelpInner__comment::placeholder {
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--main_text_color);
  }
  .NeedHelpInner__comment:focus {
    padding-left: 18px;
    padding-top: 14px;
  }
  .NeedHelpInner__comment:focus::placeholder {
    color: transparent;
  }
  @media screen and (min-width: 768px) {
    .NeedHelpInner__comment {
      width: 352px;
    }
  }
  .NeedHelpInnerBtn {
    padding: 14px 122px;
    margin-top: 12px;
    background: var(--accent);
    color: var(--add_card_btn_svg_bg);
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
  }
`;

const NeedHelpInnerText = styled('p')`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--main_text_color);
  margin-bottom: 24px;
`;

const CloseButton = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  stroke: var(--main_text_color);
  cursor: pointer;
`;

export { NeedHelpInner, NeedHelpInnerText, CloseButton };
