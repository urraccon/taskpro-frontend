import { Button } from "@mui/material";
import { IconContainer, IconPath, PlusIcon } from "./CustomButton.styles";
import icons from "../../../../assets/svgSprite/iconsSprite.svg";
import PropTypes from "prop-types";

const btnStyle = (btnType) => ({
  backgroundColor: "#bedbb0",
  color: "#161616",
  fontFamily: "Poppins",
  fontWeight: "medium",
  fontSize: 14,
  letterSpacing: -0.36,
  textTransform: "none",
  paddingTop: "10px",
  paddingBottom: "10px",
  marginTop: btnType === "card" ? "25px" : btnType === "profile" ? 0 : "40px",
  padding: btnType === "profile" ? 0 : "10px 16px",
  width: btnType === "profile" ? "24px" : "100%",
  height: btnType === "profile" ? "24px" : "100%",
  minWidth: btnType === "profile" ? 0 : "64px",
  position: btnType === "profile" && "absolute",
  zIndex: btnType === "profile" && 1,
  left: btnType === "profile" && "46%",
  top: btnType === "profile" && "30%",

  "&:hover": {
    backgroundColor: "#9dc888",
  },
});

const plusIconProfileStyle = { color: " #121212" };

const CustomButton = ({
  children,
  onClick,
  style,
  type = "submit",
  btnType,
}) => (
  <Button
    sx={btnStyle(btnType)}
    variant="contained"
    fullWidth
    onClick={onClick}
    style={style}
    type={type}
  >
    {btnType === "profile" ? (
      <PlusIcon style={plusIconProfileStyle}>
        <IconPath href={`${icons}#icon-plus`} />
      </PlusIcon>
    ) : (
      btnType !== "without-icon" && (
        <IconContainer>
          <PlusIcon>
            <IconPath href={`${icons}#icon-plus`} />
          </PlusIcon>
        </IconContainer>
      )
    )}
    {children}
  </Button>
);

CustomButton.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string,
  btnType: PropTypes.string,
};

export default CustomButton;
