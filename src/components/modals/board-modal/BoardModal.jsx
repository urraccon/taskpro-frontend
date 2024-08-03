import PropTypes from "prop-types";
import { Label } from "./BoardModal.styles";
import { Field, Form, Formik } from "formik";
import CustomField from "../common/custom-field/CustomField";
import CustomButton from "../common/custom-button/CustonButton";
import CustomModal from "../common/custom-modal/CustomModal";
import CustomRadioGroup from "../common/custom-radio-group/CustomRadioGroup";
import BoardSchema from "./BoardSchema";
import { useDispatch, useSelector } from "react-redux";
import {
  addBoard,
  updateBoard,
} from "../../../redux/board/operations/boardOperations";
import { useEffect, useState } from "react";
import { selectBoard } from "../../../redux/board/selectors";

const BoardModal = ({ id, close }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("add");
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("project");
  const [background, setBackground] = useState("no-background");
  const board = useSelector(selectBoard);

  useEffect(() => {
    if (id) {
      setAction("edit");
    } else {
      setOpen(true);
    }
  }, [id]);

  useEffect(() => {
    if (action === "edit") {
      setTitle(board.title);
      setIcon(board.icon);
      setBackground(board.background);
    }
  }, [action, board]);

  useEffect(() => {
    if (title) {
      setOpen(true);
    }
  }, [background]);

  function handleClose() {
    setOpen(false);
    close();
  }

  return (
    <CustomModal open={open} onClose={handleClose}>
      <Label>New board</Label>
      <Formik
        initialValues={{
          title,
          icon,
          background,
        }}
        validationSchema={BoardSchema}
        onSubmit={(values) => {
          {
            action === "add"
              ? dispatch(addBoard(values))
              : dispatch(updateBoard({ values, id }));
          }
          handleClose();
        }}
      >
        {({ submitForm }) => (
          <Form>
            <Field name="title" label="Title" component={CustomField} />
            <CustomRadioGroup
              label="Icon"
              name="icon"
              type="icon"
              options={[
                "project",
                "star",
                "loading",
                "puzzle-piece",
                "container",
                "lightning",
                "colors",
                "hexagon",
              ]}
            />
            <CustomRadioGroup
              label="Background"
              name="background"
              type="background"
              options={[
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
              ]}
            />
            <CustomButton onClick={submitForm}>
              {action === "edit" ? "Edit" : "Create"}
            </CustomButton>
          </Form>
        )}
      </Formik>
    </CustomModal>
  );
};

BoardModal.propTypes = {
  id: PropTypes.string,
  close: PropTypes.func,
};

export default BoardModal;
