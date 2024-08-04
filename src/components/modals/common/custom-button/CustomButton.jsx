import { Button } from "@mui/material";
import { IconContainer, IconPath, PlusIcon } from "./CustomButton.styles";
import icons from "../../../../assets/svgSprite/iconsSprite.svg";
import PropTypes from "prop-types";

const bttnStyle = {
  backgroundColor: "#bedbb0",
  color: "#161616",
  fontFamily: "Poppins",
  fontWeight: "medium",
  fontSize: 14,
  letterSpacing: -0.36,
  textTransform: "none",
  paddingTop: "10px",
  paddingBottom: "10px",
  marginTop: "40px",

  "&:hover": {
    backgroundColor: "#9dc888",
  },
};

const CustomButton = ({ children, onClick, style, type }) => (
  <Button
    sx={bttnStyle}
    variant="contained"
    fullWidth
    onClick={onClick}
    style={style}
  >
    {type !== "support" && (
      <IconContainer>
        <PlusIcon>
          <IconPath href={`${icons}#icon-plus`} />
        </PlusIcon>
      </IconContainer>
    )}
    {children}
  </Button>
);

CustomButton.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string,
};

export default CustomButton;
