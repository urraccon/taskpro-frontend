import { FormControl, FormControlLabel, FormLabel } from "@mui/material";
import { Field } from "formik";
import { RadioGroup } from "formik-mui";
import PropTypes from "prop-types";
import IconsRadio from "../../board-modal/components/icons-radio/IconsRadio";
import BgRadio from "../../board-modal/components/bg-radio/BgRadio";
import PriorityRadio from "../../card-modal/components/priority-radio/PriorityRadio";

const ctrlStyle = (type) => ({
  gap: type === "priority" ? "4px" : "14px",
  marginBottom: type === "priority" ? "14px" : "24px",
  marginTop: type === "priority" && "9px",
});

const labelStyle = (type) => ({
  fontFamily: "Poppins",
  fontWeight: type === "priority" ? "regular" : "medium",
  fontSize: type === "priority" ? 12 : 14,
  letterSpacing: type === "priority" ? -0.24 : -0.28,
  color: type === "priority" ? "rgba(255, 255, 255, 0.5)" : "white",
  lineHeight: "normal",

  "&.Mui-focused": {
    color: "white",
  },
});

const ctrlLabelStyle = {
  margin: 0,
};

const radioGroupStyle = (type) => ({
  gap: type === "background" ? "4px" : "8px",
  paddingRight: type === "background" && "35px",
});

const CustomRadioGroup = ({ label, name, options, type }) => (
  <FormControl sx={ctrlStyle(type)}>
    <FormLabel sx={labelStyle(type)}>{label}</FormLabel>
    <Field component={RadioGroup} name={name} row sx={radioGroupStyle(type)}>
      {options.map((option) => (
        <FormControlLabel
          key={option}
          value={option}
          control={
            type === "icon" ? (
              <IconsRadio option={option} />
            ) : type === "background" ? (
              <BgRadio option={option} />
            ) : (
              <PriorityRadio option={option} />
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
