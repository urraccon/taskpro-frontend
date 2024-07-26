import styled from 'styled-components';

export const Welcome = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(180deg, rgba(196, 196, 196, 0) 25%, #bedbb0 92.19%);
`;
export const WelcomeContent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .WelcomeContent__img {
    margin-bottom: 14px;
  }
  .WelcomeContent__logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 14px;
    font-weight: 600;
    font-size: 28px;
    letter-spacing: -0.04em;
    margin-bottom: 24px;
  }
  .WelcomeContent__text {
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    text-align: center;
    max-width: 335px;
    margin-bottom: 48px;
  }
  .WelcomeContent__navigation {
    display: flex;
    flex-direction: column;
  }
  .WelcomeContent__btn-reg {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    text-align: center;
    color: #fff;
    background-color: #161616;
    border-radius: 8px;
    padding: 14px 122px;
  }
  .WelcomeContent__btn-log {
    display: block;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    padding: 14px 122px;
  }
  @media screen and (max-width: 340px) {
    .WelcomeContent__btn-reg {
      padding: 14px 75px;
    }
    .WelcomeContent__btn-log {
      padding: 14px 75px;
    }
  }
  @media screen and (min-width: 768px) {
    .WelcomeContent__img {
      margin-bottom: 24px;
    }
    .WelcomeContent__logo {
      font-size: 40px;
    }
    .WelcomeContent__text {
      max-width: 473px;
    }
    .WelcomeContent__btn-reg {
      padding: 14px 122px;
    }
    .WelcomeContent__btn-log {
      padding: 14px 122px;
    }
  }
`;
