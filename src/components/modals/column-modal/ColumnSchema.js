import * as Yup from "yup";

const ColumnSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too short.")
    .max(36, "Too long.")
    .required("Title is required"),
});

export default ColumnSchema;
