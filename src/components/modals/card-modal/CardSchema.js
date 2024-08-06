import dayjs from "dayjs";
import * as Yup from "yup";

const today = dayjs().startOf("day");

const CardSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Title is required"),
  description: Yup.string().min(5, "Too short.").max(250, "Too long."),
  priority: Yup.string().oneOf(
    ["no-priority", "low", "medium", "high"],
    ({ value, values }) => `Invalid option ${value}. Valid options: ${values}`
  ),
  deadline: Yup.date().min(today, "The deadline cannot be in the past"),
});

export default CardSchema;
