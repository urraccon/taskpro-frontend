import { Radio } from "@mui/material";
import { Icon, IconPath, Image } from "./BgRadio.styles";
import Icons from "../../../../../assets/svgSprite/iconsSprite.svg";

const radioStyle = {
  padding: 0,
};

const image = (option) => {
  if (option === "no-background") {
    return (
      <Icon>
        <IconPath href={`${Icons}#no-background`} />
      </Icon>
    );
  } else {
    return (
      <Image
        src={`/TaskPro/src/assets/img/bg-icons/${option}.jpg`}
        alt={option}
      />
    );
  }
};
const BgRadio = (props) => {
  const option = props.option;

  return (
    <Radio
      {...props}
      sx={radioStyle}
      icon={image(option)}
      checkedIcon={image(option)}
    />
  );
};

export default BgRadio;
