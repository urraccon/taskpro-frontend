import * as Yup from "yup";

const BoardSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too short.")
    .max(24, "Too long.")
    .required("Title is required."),
  icon: Yup.string().oneOf(
    [
      "project",
      "star",
      "loading",
      "puzzle-piece",
      "container",
      "lightning",
      "colors",
      "hexagon",
    ],
    ({ value, values }) => `Invalid option ${value}. Valid options: ${values}`
  ),
  background: Yup.string().oneOf(
    [
      "no-background",
      "flowers",
      "stars",
      "tree",
      "half-moon",
      "leaves",
      "cloud",
      "coast",
      "figure",
      "full-moon",
      "boat",
      "hot-air-ballon",
      "canyon",
      "ocean",
      "hot-air-ballons",
      "northern-lights",
    ],
    ({ value, values }) => `Invalid option ${value}. Valid options: ${values}`
  ),
});

export default BoardSchema;
