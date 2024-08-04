import * as Yup from "yup";

const SupportSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  comment: Yup.string()
    .min(10, "Too short")
    .max(200, "Too long")
    .required("Comment is required"),
});

export default SupportSchema;
