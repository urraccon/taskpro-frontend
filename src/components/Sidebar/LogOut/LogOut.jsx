import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';
import iconsSprite from '../../../assets/svgSprite/iconsSprite.svg';
import {
  LogOutContainer,
  LogoutButton,
  IconLogOut,
  LogOutText,
} from './LogOut.styled';

const LogOut = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <LogOutContainer>
      <LogoutButton type="submit" aria-label="Log out" onClick={handleLogOut}>
        <IconLogOut>
          <use xlinkHref={`${iconsSprite}#icon-login`} />{' '}
        </IconLogOut>
      </LogoutButton>
      <LogOutText>Log out</LogOutText>{' '}
    </LogOutContainer>
  );
};

export default LogOut;
