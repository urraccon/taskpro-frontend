import { TextField } from "formik-mui";

const fieldStyle = (value) => ({
  marginBottom: "6px",

  "& input": {
    color: "white",
    fontFamily: "Poppins",
    fontWeight: "regular",
    fontSize: 14,
    letterSpacing: -0.36,
    backgroundColor: "rgba(31,31,31,0.4)",
    padding: "14px 18px",
    lineHeight: "normal",
    height: "unset",
  },

  "& .MuiInputLabel-root": {
    color: "rgba(255,255,255,0.4)",
    fontFamily: "Poppins",
    fontWeight: "regular",
    fontSize: 14,
    letterSpacing: -0.36,
    padding: "14px 18px",
    transition: "opacity 0.3s ease",
    transform: "unset",
    opacity: value ? 0 : 1,
    lineHeight: "normal",

    "&.Mui-focused": {
      opacity: 0,
      transform: "unset",
      color: "rgba(255,255,255,0.4)",
    },

    "&.Mui-error": {
      color: "#d32f2f",
    },
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(190,219,176,0.4)",
      height: "100%",
      top: 0,

      "& legend": {
        display: "none",
      },
    },

    "&:hover fieldset": {
      borderColor: "#bedbb0",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#bedbb0",
    },

    "&.Mui-error fieldset": {
      borderColor: "#d32f2f",
    },
  },

  "& .MuiFormHelperText-root": {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
});

const CustomField = (props) => {
  const { value } = props.field;

  return (
    <TextField
      {...props}
      type="text"
      fullWidth
      helperText=" "
      sx={fieldStyle(value)}
    />
  );
};

export default CustomField;
