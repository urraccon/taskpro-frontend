import { Radio } from "@mui/material";
import { Icon, IconPath } from "./PriorityRadio.styles";
import icons from "../../../../../assets/svgSprite/iconsSprite.svg";

const radioStyle = {
  padding: 0,
};

const iconStyle = (option) => {
  switch (option) {
    case "low":
      return { color: "#8FA1D0" };
    case "medium":
      return { color: "#E09CB5" };
    case "high":
      return { color: "#BEDBB0" };
    default:
      return { color: "rgba(255, 255, 255, 0.3)" };
  }
};

const icon = (option) => (
  <Icon style={iconStyle(option)}>
    <IconPath href={`${icons}#unchecked-priority-icon`} />
  </Icon>
);

const checkedIcon = (option) => (
  <Icon style={iconStyle(option)}>
    <IconPath href={`${icons}#checked-priority-icon`} />
  </Icon>
);

const PriorityRadio = ({ option, ...props }) => (
  <Radio
    {...props}
    sx={radioStyle}
    icon={icon(option)}
    checkedIcon={checkedIcon(option)}
  />
);

export default PriorityRadio;
