import * as Yup from "yup";

const ProfileSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short")
    .max(32, "Too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Too short")
    .max(64, "Too long")
    .required("Password is required"),
});

export default ProfileSchema;
