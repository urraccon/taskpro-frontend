import styled from 'styled-components';

const HelpContainer = styled.div`
  background: var(--background_need_help);
  padding: 14px;
  margin-bottom: 24px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    padding: 20px;
    width: 172px;
  }
`;

const TextHelp = styled.p`
  margin-top: 12px;
  margin-bottom: 18px;
  font-size: 12px;
  line-height: 133%;
  letter-spacing: -0.02em;
  color: var(--sidebar_text_color);
  @media screen and (min-width: 768px) {
    line-height: 143%;
  }
`;

const TextHelpDecor = styled.span`
  color: var(--accent);
`;

const ButtonHelpContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const ButtonHelp = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
`;

const ButtonIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: var(--sidebar_text_color);
`;

const TextHelpButton = styled.span`
  font-size: 12px;
  letter-spacing: -0.02em;
  color: var(--sidebar_text_color);
`;

export {
  HelpContainer,
  TextHelp,
  TextHelpDecor,
  ButtonHelpContainer,
  ButtonHelp,
  ButtonIcon,
  TextHelpButton,
};
