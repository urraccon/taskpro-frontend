import styled from 'styled-components';

export const Modal = styled.div`
  max-width: 98%;
  width: 335px;
  max-height: 98%;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const ModalContent = styled.div`
  background-color: var(--modal_content_bg);
  border-radius: 8px;
  z-index: 20;
  position: relative;
  padding: 24px;
`;

export const NewBoardTitle = styled.h2`
  margin: 0 0 24px 0;
  width: 96px;
  height: 27px;
  left: 24px;
  top: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: var(--main_text_color);
`;

export const Input = styled.input`
  margin: 0 0 24px 0;
  width: 100%;
  height: 49px;
  padding-left: 20px;
  background: transparent;
  opacity: 0.4;
  border: 1px solid #bedbb0;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  color: var(--sidebar_text_color);

  &::placeholder {
    width: 28px;
    height: 21px;
    left: 18px;
    top: 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #bedbb0;
  }

  &:not(:placeholder-shown) {
    opacity: 1;
    color: var(--main_text_color);
  }

  &:focus {
    opacity: 1;
    outline: none;
    border: 1px solid #bedbb0;
  }
`;

export const ErrorMessage = styled.p`
  color: var(--main_text_color);
  margin-bottom: 10px;
  text-align: center;
`;

export const IconTitle = styled.h3`
  margin: 0 0 14px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: var(--main_text_color);
`;

export const IconWrap = styled.div`
  margin: 0 0 24px 0;
`;

export const Icon = styled.svg`
  margin-right: 8px;
  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: ${({ selected }) => (selected ? 'var(--main_text_color)' : 'grey')};
  cursor: pointer;
`;

export const BackgroundTitle = styled.h3`
  margin: 0 0 14px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: var(--main_text_color);
`;

export const BgIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 260px;
  gap: 4px;
  margin-bottom: 40px;
`;

export const BackgroundItem = styled.div`
  cursor: pointer;
  transition: transform 0.3s;
  transform: ${({ selected }) => (selected ? 'scale(0.85)' : 'scale(1)')};
  filter: ${({ selected }) => (selected ? 'grayscale(100%)' : 'none')};
  filter: ${({ selected }) => (selected ? 'brightness(85%)' : 'none')};
  border-radius: 6px;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BackgroundImage = styled.img`
  width: 28px;
  height: 28px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 0 10px;
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--accent);
  color: var(--modal_button_text);
  font-size: 14px;
  font-weight: 500;
  border-color: transparent;
  transition: scale 250ms ease-in 0s;

  &:hover,
  &focus {
    scale: 1.05;
  }
`;

export const ContainerSvg = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--button_svg_background);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  & + p {
    color: var(--button_svg_background);
    letter-spacing: -0.28px;
  }
`;

export const Svg = styled.svg`
  stroke: var(--add_card_btn_svg);
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
