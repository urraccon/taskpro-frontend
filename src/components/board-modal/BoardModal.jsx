import PropTypes from "prop-types";
import { Container, Title } from "./BoardModal.styles";
import { Button, Modal } from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-mui";

const modalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const boardSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too short.")
    .max(24, "Too long.")
    .required("Title is required."),
  icons: Yup.string().oneOf(
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
    ({ values }) =>
      `The selected option is invalid. Valid options: ${values.join(", ")}`
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
    ({ values }) =>
      `The selected option is invalid. Valid options: ${values.join(", ")}`
  ),
});

const BoardModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose} sx={modalStyle}>
      <Container>
        <Title>New board</Title>
        <Formik
          initialValues={{
            title: "",
            icons: "project",
            background: "no-background",
          }}
          validationSchema={boardSchema}
          onSubmit={(values, { setSubmitting }) =>
            setTimeout(() => {
              console.log(values);
              setSubmitting(false);
            })
          }
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <Field name="title" component={TextField} />
              <Field name="icons" component={TextField} />
              <Field name="background" component={TextField} />
              <Button onClick={submitForm} disabled={isSubmitting}>
                Create
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Modal>
  );
};

export default BoardModal;

BoardModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
