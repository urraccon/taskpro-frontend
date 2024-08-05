import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h2`
  font-family: Poppins;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.24px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 4px;
`;

export const SelectedDateContainer = styled.div`
  color: #bedbb0;
`;

export const SelectedDate = styled.span`
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;
`;

export const Today = styled.span``;

export const IconContainer = styled.div`
  display: inline-flex;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
`;

export const Icon = styled.svg`
  width: 12px;
  height: 7px;
`;

export const IconPath = styled.use``;

export const Error = styled.p`
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  color: #d32f2f;
`;
