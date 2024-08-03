import { FormControl, FormControlLabel, FormLabel } from "@mui/material";
import { Field } from "formik";
import { RadioGroup } from "formik-mui";
import PropTypes from "prop-types";
import IconsRadio from "../../board-modal/components/icons-radio/IconsRadio";
import BgRadio from "../../board-modal/components/bg-radio/BgRadio";

const ctrlStyle = {
  gap: "14px",
  marginBottom: "24px",
};

const labelStyle = {
  fontFamily: "Poppins",
  fontWeight: "medium",
  fontSize: 14,
  letterSpacing: -0.36,
  color: "white",
  lineHeight: "normal",

  "&.Mui-focused": {
    color: "white",
  },
};

const ctrlLabelStyle = {
  margin: 0,
};

const radioGroupStyle = (type) => ({
  gap: type === "icon" ? "8px" : "4px",
  paddingRight: type === "background" && "35px",
});

const CustomRadioGroup = ({ label, name, options, type }) => (
  <FormControl sx={ctrlStyle}>
    <FormLabel sx={labelStyle}>{label}</FormLabel>
    <Field component={RadioGroup} name={name} row sx={radioGroupStyle(type)}>
      {options.map((option) => (
        <FormControlLabel
          key={option}
          value={option}
          control={
            type === "icon" ? (
              <IconsRadio option={option} />
            ) : (
              <BgRadio option={option} />
            )
          }
          sx={ctrlLabelStyle}
        />
      ))}
    </Field>
  </FormControl>
);

CustomRadioGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  type: PropTypes.string,
};

export default CustomRadioGroup;
