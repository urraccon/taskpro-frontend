import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  border-radius: 8px;
  &:hover{
  color:var(--accent)
}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--main_text_color);
  &:hover {
    color: var(--accent);
  }
`;



export const SvgIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke-width: 1.5px;
  stroke-width: 1.5px;
  stroke: currentColor;
  fill: transparent;
 
`;

export const Text = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
 
  
`;


