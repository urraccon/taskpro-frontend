import PropTypes from "prop-types";
import CustomModal from "../common/custom-modal/CustomModal";
import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  addColumn,
  fetchColumn,
  updateColumn,
} from "../../../redux/board/operations/columnOperations";
import {
  selectColumn,
  selectCurrentBoard,
} from "../../../redux/board/selectors";
import ColumnSchema from "./ColumnSchema";
import CustomTitle from "../common/custom-title/CustomTitle";
import CustomField from "../common/custom-field/CustomField";
import CustomButton from "../common/custom-button/CustomButton";

const btnStyle = {
  marginTop: 0,
};

const ColumnModal = ({ id, boardId, close }) => {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("add");
  const [title, setTitle] = useState("");
  const column = useSelector(selectColumn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      setAction("edit");
      dispatch(fetchColumn(id));
    } else {
      setOpen(true);
    }
  }, [id]);

  useEffect(() => {
    if (column._id) {
      setTitle(column.title);
      setOpen(true);
    }
  }, [column]);

  const handleClose = () => {
    close();
  };

  return (
    <CustomModal open={open} onClose={handleClose}>
      <CustomTitle>
        {action === "add" ? "Add column" : "Edit column"}
      </CustomTitle>
      <Formik
        initialValues={{
          title,
        }}
        validationSchema={ColumnSchema}
        onSubmit={(values) => {
          {
            action === "add"
              ? dispatch(addColumn({ ...values, boardId }))
              : dispatch(updateColumn({ values, id }));
          }
          handleClose();
        }}
      >
        {({ submitForm }) => (
          <Form>
            <Field name="title" label="Title" component={CustomField} />
            <CustomButton onClick={submitForm} style={btnStyle}>
              {action === "add" ? "Add" : "Edit"}
            </CustomButton>
          </Form>
        )}
      </Formik>
    </CustomModal>
  );
};

ColumnModal.propTypes = {
  id: PropTypes.string,
  close: PropTypes.func,
  boardId: PropTypes.string,
};

export default ColumnModal;
