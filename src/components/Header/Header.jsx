import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "../../providers/themeProvider";
import {
  Container,
  List,
  ListItem,
  NameUser,
  Button,
  Svg,
  BtnBurger,
  Burger,
  Wrapper,
} from "./Header.styled";
import Select from "react-select";
import sprite from "../../assets/svgSprite/iconsSprite.svg";
import { selectUser } from "../../redux/auth/selectors.js";
import { selectTheme } from "../../redux/theme/selectors";
import { changeTheme } from "../../redux/theme/operations";
import ProfileModal from "../modals/profile-modal/ProfileModal.jsx";

const options = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "violet", label: "Violet" },
];

const Header = ({ showSidebar, size }) => {
  const [, setTheme] = useContext(ThemeContext);

  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const th = options.findIndex((e) => e.value === theme);

  useEffect(() => {
    setTheme({ value: theme });
  }, [setTheme, theme]);

  const dispatchTheme = ({ value }) => {
    dispatch(changeTheme({ theme: value }));
  };

  const [isShowModal, setIsShowModal] = useState(false);

  const openHandleClik = () => {
    setIsShowModal(true);
  };

  const closeHandleClik = () => {
    setIsShowModal(false);
  };

  const user = useSelector(selectUser);

  return (
    <Container>
      <Wrapper>
        {size < 1440 && (
          <BtnBurger type="button" onClick={showSidebar}>
            <Burger width={24} height={24}>
              <use xlinkHref={`${sprite}#icon-menu`} />
            </Burger>
          </BtnBurger>
        )}

        <ListItem>
          <List>
            <Select
              defaultValue={options[th]}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                  fontFamily: "Poppins, sans-serif",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }),

                indicatorSeparator: (baseStyles, state) => ({
                  ...baseStyles,
                  display: "none",
                }),
                menuList: (baseStyles, state) => ({
                  ...baseStyles,
                  color: "var(--main_text_color)",
                }),
                placeholder: (baseStyles, state) => ({
                  ...baseStyles,
                  color: "var(--main_text_color)",
                }),
                singleValue: (baseStyles, state) => ({
                  ...baseStyles,
                  color: "var(--main_text_color)",
                }),
                dropdownIndicator: (baseStyles, state) => ({
                  ...baseStyles,
                  color: "var(--main_text_color)",
                }),
                menu: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "var(--background_header)",
                }),

                option: (baseStyles, state) => ({
                  ...baseStyles,
                  "&:active": {
                    color: "var(--accent)",
                  },
                  "&:hover": {
                    color: "var(--accent)",
                  },
                }),
              }}
              onChange={dispatchTheme}
              options={options}
              placeholder={`Theme`}
            />
          </List>
          <List>
            {user && <NameUser>{user.name ?? "Name"}</NameUser>}

            <Button type="button" onClick={openHandleClik}>
              {user.avatarURL ? (
                <img src={`${user.avatarURL}`} alt="User avatar" />
              ) : (
                <Svg width={32} height={32}>
                  <use xlinkHref={`${sprite}#icon-user_default`} />
                </Svg>
              )}
            </Button>

            {isShowModal && <ProfileModal />}
          </List>
        </ListItem>
      </Wrapper>
    </Container>
  );
};

export default Header;
