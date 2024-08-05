import { Radio } from "@mui/material";
import { ActiveIcon, Icon, IconPath } from "./IconsRadio.styles";
import icons from "../../../../../assets/svgSprite/iconsSprite.svg";

const icon = (option) => (
  <Icon>
    <IconPath href={`${icons}#icon-${option}`} />
  </Icon>
);

const checkedIcon = (option) => (
  <ActiveIcon>
    <IconPath href={`${icons}#icon-${option}`} />
  </ActiveIcon>
);

const radioStyle = {
  padding: 0,
};

const IconsRadio = ({ option, ...props }) => (
  <Radio
    {...props}
    sx={radioStyle}
    icon={icon(option)}
    checkedIcon={checkedIcon(option)}
  />
);

export default IconsRadio;
